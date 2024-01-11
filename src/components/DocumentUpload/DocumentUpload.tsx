'use client';
import DocumentIcon from '@/assets/icons/blue-document.svg';
import UploadIcon from '@/assets/icons/upload.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import WarningIcon from '@/assets/icons/red-warning.svg';
import useStyles from './DocumentUpload.styles';
import Text from '@stryberventures/gaia-react.text';
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Button from '@stryberventures/gaia-react.button';
import { splitLastOccurrence } from '@/utils/string';

enum FileUploadStatus {
  Empty = 'empty',
  Loaded = 'loaded',
}

export enum FileExtensions {
  Pdf = 'application/pdf',
  Jpeg = 'image/jpeg',
  Jpg = 'image/jpg',
  Png = 'image/png',
}

const StatusToIconMapping = {
  [FileUploadStatus.Empty]: UploadIcon,
  [FileUploadStatus.Loaded]: TrashIcon,
};

interface DocumentUploadProps {
  id: string;
  name: string;
  allowedFileExtensions: FileExtensions[];
  maxSizeInMb: number;
  onFileLoaded?: (file: File) => void;
  preloadedFile?: File | null;
}

export const DocumentUpload = ({
  id,
  name,
  allowedFileExtensions,
  maxSizeInMb,
  preloadedFile,
  onFileLoaded,
}: DocumentUploadProps) => {
  const [status, setStatus] = useState<FileUploadStatus>(
    FileUploadStatus.Empty
  );
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<'size' | 'extension' | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [errorFile, setErrorFile] = useState<File | null>(null);
  const [errorFileSizeInMb, setErrorFileSizeInMb] = useState<string | null>();
  const [errorFileText, setErrorFileText] = useState<string | null>(null);
  const classes = useStyles({ error: !!error });
  const fileInput = useRef<HTMLInputElement>(null);

  const Icon: React.ElementType = StatusToIconMapping[status];
  const helperText = error
    ? null
    : maxSizeInMb
      ? `الحجم الاقصى ${maxSizeInMb}MB`
      : null;

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (status === FileUploadStatus.Loaded) {
      setFile(null);
      fileInput.current!.value = '';
    } else {
      fileInput?.current?.click();
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || !event.target.files.length) return;
    handleFile(event.target.files[0]);
  };

  const handleFile = useCallback(
    (file: File) => {
      fileInput.current!.value = '';
      setFile(null);
      if (file.size > maxSizeInMb * 1024 * 1024) {
        setError('size');
        setErrorFile(file);
        return;
      }
      if (
        allowedFileExtensions.length > 0 &&
        !allowedFileExtensions.includes(file.type as FileExtensions)
      ) {
        setError('extension');
        setErrorFile(file);
        return;
      }
      setFile(file);
      setError(null);
      onFileLoaded && onFileLoaded(file);
    },
    [allowedFileExtensions, maxSizeInMb, onFileLoaded]
  );

  useEffect(() => {
    if (preloadedFile) {
      handleFile(preloadedFile);
    }
  }, [preloadedFile, handleFile]);

  useEffect(() => {
    setStatus(file ? FileUploadStatus.Loaded : FileUploadStatus.Empty);
  }, [file]);

  useEffect(() => {
    if (error) {
      if (error === 'extension') {
        setErrorText(
          'يُسمح بالملفات التالية فقط: ' +
            allowedFileExtensions
              .map((ext) => ext.split('/')[1].toUpperCase())
              .join(', ')
        );
      } else if (error === 'size') {
        setErrorText('الملف يتجاوز الحد الأقصى للحجم');
      }
    } else {
      setErrorText(null);
    }
  }, [allowedFileExtensions, error]);

  useEffect(() => {
    if (errorFile && error) {
      setErrorFileText(errorFile.name);
      if (error === 'size') {
        setErrorFileSizeInMb((errorFile.size / 1024 / 1024).toFixed(1));
      }
    } else {
      setErrorFileText(null);
      setErrorFileSizeInMb(null);
    }
  }, [error, errorFile]);

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.iconContainer}>
          <DocumentIcon className={classes.icon} />
          {errorText ? <Text className={classes.name}>{name}</Text> : null}
        </div>
        {errorText ? null : <Text className={classes.name}>{name}</Text>}
        {errorFileText ? (
          <div className={classes.errorFileNameContainer}>
            <WarningIcon />
            <Text className={classes.helper}>{errorFileText}</Text>
            {errorFileSizeInMb ? (
              <Text className={classes.helper}>{errorFileSizeInMb}MB</Text>
            ) : null}
          </div>
        ) : file ? (
          <Button
            className={classes.fileNameButton}
            onClick={() => fileInput?.current?.click()}
          >
            {splitLastOccurrence(file.name, '.')[0]}
          </Button>
        ) : helperText ? (
          <Text className={classes.helper}>{helperText}</Text>
        ) : null}
        {errorText ? <Text className={classes.error}>{errorText}</Text> : null}
      </div>
      <>
        <Button
          className={classes.uploadButton}
          icon={<Icon />}
          onClick={handleClick}
        />
        <input
          type='file'
          id={id}
          name={name}
          hidden
          ref={fileInput}
          onChange={handleChange}
        />
      </>
    </div>
  );
};
