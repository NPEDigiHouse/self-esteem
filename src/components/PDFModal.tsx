import { Modal, Text } from "@mantine/core";
import React from "react";

interface IPDFModalProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  children: React.ReactNode;
  maxWidth?: number;
  onClose?: () => void;
}

const PDFModal = ({
  opened,
  setOpened,
  title="Dokumen Hasil Tes Kecemasan",
  children,
  maxWidth = 1000,
  onClose = () => {}
}: IPDFModalProps) => {
  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
        onClose();
      }}
      centered
      title={title}
      padding={20}
      size={"90%"}
      // fullScreen
      styles={{
        root: {
          // borderRadius: "6px"
          // width: "90%"
        },
        title: {
          fontSize: 24,
          color: "#334155",
          fontWeight: 700,
          padding: "6px !important"
        },
        close: {
          // padding: "20px 20px !important"
          // marginRight: "24px !important"
        }
      }}
      // className="!bg-error-50 w-[1000px]"
    >
      {/* <Text className="text-secondary-text-500 ml-2 -mt-6 mb-4">
        Jika isi dokumen kosong silahkan tutup POP-UP ini dan buka kembali
        dokumennya.
      </Text> */}
      <div className="py-2">{children}</div>
    </Modal>
  );
};

export default PDFModal;
