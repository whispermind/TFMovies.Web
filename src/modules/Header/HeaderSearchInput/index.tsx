import { FormTextFieldIconed } from "../../../common/components";
import { SearchIcon } from "../../../common/components/icons";

export const HeaderSearchInput = () => {
  return (
    <FormTextFieldIconed
      position="end"
      placeholder="Search something..."
      icon={SearchIcon}
      sx={{ maxWidth: "420px" }}
      fullWidth
    />
  );
};
