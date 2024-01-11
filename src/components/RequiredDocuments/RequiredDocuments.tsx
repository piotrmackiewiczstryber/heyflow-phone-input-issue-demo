import { CustomButton } from '@/components/CustomButton/CustomButton';
import {
  DocumentUpload,
  FileExtensions,
} from '@/components/DocumentUpload/DocumentUpload';
import useStyles from './RequiredDocuments.styles';

export const RequiredDocuments = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <DocumentUpload
          id='1'
          name='1'
          allowedFileExtensions={[
            FileExtensions.Jpeg,
            FileExtensions.Jpg,
            FileExtensions.Png,
          ]}
          maxSizeInMb={2}
        />
        <DocumentUpload
          id='2'
          name='2'
          allowedFileExtensions={[FileExtensions.Pdf]}
          maxSizeInMb={2}
        />
        <DocumentUpload
          id='3'
          name='3'
          allowedFileExtensions={[
            FileExtensions.Jpeg,
            FileExtensions.Jpg,
            FileExtensions.Png,
          ]}
          maxSizeInMb={2}
        />
        <DocumentUpload
          id='4'
          name='4'
          allowedFileExtensions={[FileExtensions.Pdf]}
          maxSizeInMb={2}
        />
        <DocumentUpload
          id='5'
          name='5'
          allowedFileExtensions={[
            FileExtensions.Jpeg,
            FileExtensions.Jpg,
            FileExtensions.Png,
          ]}
          maxSizeInMb={2}
        />
        <DocumentUpload
          id='6'
          name='6'
          allowedFileExtensions={[FileExtensions.Pdf]}
          maxSizeInMb={2}
        />
      </div>
      <CustomButton type='submit' fullWidth className={classes.button}>
        تأكيد
      </CustomButton>
    </>
  );
};
