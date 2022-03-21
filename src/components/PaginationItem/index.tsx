import { Container } from "./styles";

type Props = {
  data: number;
  currentPage: number;
  onClick: (page: number) => void;
};

const PaginationItem = ({ data, currentPage, onClick }: Props) => {
  return (
    <Container
      className={data === currentPage ? "active" : ""}
      onClick={() => onClick(data)}
    >
      {data}
    </Container>
  );
};

export default PaginationItem;
