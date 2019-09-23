import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledFilledButton = styled(Button)`
    background-color: #FFA500;
    color: #FFF;
    border-color: #FFA500;
    font-size: 12px;
    width: 140px;
    
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

export const StyledOutlinedButton = styled(Button)`
    color: #FFA500;
    background-color: #FFF;
    border-color: #FFA500;
    font-size: 12px;
    width: 140px;
    
    :hover {
      color: #FFF;
      border-color: #FFA500;
      background-color: #FFA500;
    }
     
    :active, :active:focus, :active.focus, .active, .active.focus, .active:focus, 
    .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active {
      color: #FFF !important;
      background-color: #C58000 !important;
      border-color: #C58000 !important;
    }
    
    :focus {
      color: #FFA500;
      background-color: #FFF;
      border-color: #FFA500;
    }
        
    :visited {
      color: #FFA500;
      background-color: #FFF;
      border-color: #FFA500;
    }
`;