// DocumentViewer.tsx
import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

interface DocumentViewerProps {
  uri: string;
  fileName: string;
  fileType: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  uri,
  fileName,
  fileType,
}) => {
  const document = [
    {
      uri,
      fileName,
      fileType,
    },
  ];

  return (
    <DocViewer
      style={{ width: "100%", height: "100%" }}
      documents={document}
      pluginRenderers={DocViewerRenderers}
    />
  );
};

export default DocumentViewer;
