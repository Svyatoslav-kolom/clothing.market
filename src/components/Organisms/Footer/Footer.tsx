import { Box, Stack } from "@chakra-ui/react";
import { FooterComponent } from "../../Molecules/FooterComponent/FooterComponent";
import { footerData } from "../../../data/footerData";

export const Footer = () => (
  <Box marginInline="auto" pt="64px">
    <Stack direction="row" spacing="120px" justifyContent="center">
      {footerData.map((section) => (
        <Box key={section.title} display="flex" flexDirection="column" gap="12px">
          <FooterComponent type="title" content={section.title} />
          <Box display="flex" flexDirection="column" gap="8px">
            {section.links.map((link) => (
              <FooterComponent key={link} type="text" content={link} />
            ))}
          </Box>
        </Box>
      ))}
    </Stack>
  </Box>
);
