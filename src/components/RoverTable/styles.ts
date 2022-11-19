import styled from 'styled-components';

export const Container = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  table {
    background: #e0e1dd;
    margin-top: 30px;
    border-radius: 5px;
    border-collapse: collapse;
    text-align: center;

    th {
      background: #fff;
      padding: 15px;
    }

    td {
      padding: 15px;
    }
  }

  form {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
  }
`;
