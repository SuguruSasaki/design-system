import React from "react";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";

type UIPaginationProps = {
  count: number;
};

const UIPagination: React.FC<UIPaginationProps> = ({ count }) => {
  return (
    <Wrapper>
      <Pagination count={count} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default UIPagination;
