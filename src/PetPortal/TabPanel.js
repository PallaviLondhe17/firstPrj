import { Box, Tab, Tabs, Typography } from "@mui/material";
import * as React from "react";
import PropTypes from 'prop-types';


function CustomTab(props){
    const {children, value, index, ...other}=props;
    return(
        <div
        role="tabpanel"
        hidden={value!==index}
        id={`panel${index}`}
        aria-labelledby={`panel${index}`}
        {...other}
        >
            {value===index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}

        </div>
    )
}

CustomTab.propTypes={
    children:PropTypes.node,
    index:PropTypes.number.isRequired,
    value:PropTypes.number.isRequired,
}

export default function TabPanel(){
    const [value,setValue]=React.useState(0)
    const handleChange=(event,newValue)=>{
        setValue(newValue)
    }
    return(
        <Box sx={{width:'100%'}}>
           <Box>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Item one"></Tab>
                <Tab label="Item two"></Tab>
                <Tab label="Item Three"></Tab>
            </Tabs>
           </Box>
           <CustomTab>
            0
           </CustomTab>
           <CustomTab>
            2
           </CustomTab>
        </Box>
    )
}