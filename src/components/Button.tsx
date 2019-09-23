import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
    background-color: #FFA500;
    color: #FFF;
    border-color: #FFA500;
    
    :hover {
      background-color: #E29200;
      border-color: #E29200;
    }
     
    :active, :active:focus, :active.focus, .active, .active.focus, .active:focus, 
    .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active {
      background-color: #C58000 !important;
      border-color: #C58000 !important;
    }
    
    :focus {
      background-color: #FFA500;
      border-color: #FFA500;
    }
        
    :visited {
      background-color: #FFA500;
      border-color: #FFA500;
    }
`;