import { Modal, Stack, Text } from "@mantine/core";
import React from "react";

interface IQuestionModalProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const QuestionModal = ({
  opened,
  setOpened,
  title,
  children,
  onClose = () => {}
}: IQuestionModalProps) => {
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
      styles={
        {
          root: {
            borderRadius: "6px"
          },
          title: {
            fontSize: 24,
            color: "#334155",
            fontWeight: 700,
            padding: "6px !important",
          },
          close: {
            // padding: "20px 20px !important"
          }
        }
        // marginRight: "24px !important"
      }
      fullScreen
      transitionProps={{ transition: "fade", duration: 200 }}
    >
      <Stack className="py-2 relative">{children}</Stack>
    </Modal>
  );
};

export default QuestionModal;
