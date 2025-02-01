import { Box } from "@chakra-ui/react";
import { FC } from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import BagIcon  from "../../../assets/icons/BagIcon";
import AccountIcon from "../../../assets/icons/AccountIcon";
import { HeaderIcon } from "../../Atoms/HeaderIcon";

export const HeaderButtons: FC = () => {
  return (
    <Box display="flex" alignItems="center" flexDirection="row" gap="24px">
      <HeaderIcon IconComponent={SearchIcon} />
      <HeaderIcon IconComponent={BagIcon} />
      <HeaderIcon IconComponent={AccountIcon} />
    </Box>
  );
}
