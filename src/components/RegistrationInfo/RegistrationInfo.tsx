import { StyledLink } from "../Typograohy/StyledLink";
import { StyledRegistrationInfo } from "./RegistrationInfo.style";

interface IRegistrationInfoProps {
  linkURL: string;
  linkLabel: string;
  question: string;
}

export const RegistrationInfo = ({
  linkURL,
  linkLabel,
  question,
}: IRegistrationInfoProps) => {
  return (
    <StyledRegistrationInfo>
      <span>
        {`${question} `}
        <StyledLink to={linkURL} linkText={linkLabel} />
      </span>
    </StyledRegistrationInfo>
  );
};
