'use client';
import {
  DocumentUpload,
  FileExtensions,
} from '@/components/DocumentUpload/DocumentUpload';

export const DummyFileUploaderContainer = () => {
  return (
    <DocumentUpload
      id='test'
      name='شهادة الراتب'
      maxSizeInMb={1}
      allowedFileExtensions={[FileExtensions.Jpeg, FileExtensions.Jpg]}
    />
  );
};
