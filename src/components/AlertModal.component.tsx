import {
  Button,
  Group,
  Modal,
  useMantineTheme,
  Text,
  ButtonProps
} from "@mantine/core";
import React from "react";
import { EllipsisQuestionMark } from "../assets/icons/Fluent";

interface IAlertModalProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string | JSX.Element;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
  noButtonLabel?: string;
  yesButtonLabel?: string;
  maxWidth?: number;
  disableNoButton?: boolean;
}

const AlertModal = ({
  opened,
  setOpened,
  title,
  description = "Data yang telah dihapus tidak dapat dikembalikan.",
  onSubmit,
  noButtonLabel = "Batal",
  yesButtonLabel = "Hapus",
  maxWidth = 600,
  onClose = () => {},
  disableNoButton = false
}: IAlertModalProps) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
        onClose();
      }}
      centered
      title={title}
      padding={36}
      styles={{
        root: {
          maxWidth: `${maxWidth}px`,
          width: "100%",
          borderRadius: "12px",
          paddingBottom: "34px !important",
          paddingTop: "34px !important",
          backgroundColor: "#FFFFFF"
        },
        title: {
          fontSize: 24,
          color: theme.colors["primary-text"][5],
          fontWeight: 700,
          paddingLeft: "50px"
        }
      }}
    >
      <EllipsisQuestionMark
        size={42}
        className="bg-[#FEF3C7]-100 border-8 border-[#FEF3C7] rounded-full absolute top-8 left-6"
      />
      <Text className="text-lg text-secondary-text-500 pl-[50px]">
        {description}
      </Text>
      <Group mt={"md"} className=" px-8 justify-evenly gap-12" grow>
        <Button
          variant="light"
          color={"primary"}
          onClick={() => setOpened(false)}
          className="font-bold px-4 py-3 h-full rounded-md hover:bg-white"
          disabled={disableNoButton}
        >
          {noButtonLabel}
        </Button>
        <Button
          className="text-white bg-primary-500 hover:bg-primary-700 font-bold"
          onClick={onSubmit}
        >
          {yesButtonLabel}
        </Button>
      </Group>
    </Modal>
  );
};

export default AlertModal;
