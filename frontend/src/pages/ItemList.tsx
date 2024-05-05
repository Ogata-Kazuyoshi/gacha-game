import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import data from "../data/data.json"
import  {useContext, useState} from "react";
import {ApplicationContext} from "../contexts/ApplicationContextProvider.tsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {TouchDown} from "../components/TouchDown.tsx";
import {useNavigate} from "react-router-dom";

export const ItemList = () => {
    const [open, setOpen] = useState<number[]>([]);
    const [checkedIndex, setCheckedIndex] = useState<[number, number] | undefined>(undefined);
    const navigate = useNavigate()

    const { setSelectData} = useContext(ApplicationContext)!

    const handleClick = (num: number) => {
        if (open.includes(num)) {
            const index = open.findIndex(elm => elm === num)
            const tempOpen = [...open]
            tempOpen.splice(index, 1)
            setOpen(tempOpen)
        } else {
            const tempOpen = [...open]
            tempOpen.push(num)
            setOpen(tempOpen)
        }
    };

    const handleChange = (titleIndex: number, itemIndex: number) => {
        setSelectData([titleIndex, itemIndex]);
        setCheckedIndex([titleIndex, itemIndex]);
    };

    return (
        <>
            <TouchDown callBackFunc={()=>{navigate(-1)}}>
                <ArrowBackIosIcon/>
            </TouchDown>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {data.dataList.map((data, titleIndex) => {
                    return (<div key={titleIndex}>
                            <ListItemButton onClick={() => {
                                handleClick(titleIndex)
                            }}>
                                <ListItemText primary={data.title}/>
                                {open.includes(titleIndex) ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={open.includes(titleIndex)} timeout="auto" unmountOnExit>
                                {data.items.map((item, itemIndex) => {
                                    return (
                                        <List component="div" disablePadding key={itemIndex}>
                                            <ListItemButton sx={{pl: 4}}>
                                                <ListItemIcon>
                                                    <input type="checkbox"
                                                           checked={checkedIndex ? checkedIndex[0] === titleIndex && checkedIndex[1] === itemIndex : false}
                                                           onChange={(e) => {
                                                               if (e.target.checked) {
                                                                   handleChange(titleIndex, itemIndex);
                                                               } else {
                                                                   setSelectData([null, null]);
                                                                   setCheckedIndex(undefined);
                                                               }
                                                           }}/>
                                                </ListItemIcon>
                                                <ListItemText primary={item.name}/>
                                            </ListItemButton>
                                        </List>
                                    )
                                })}
                            </Collapse>
                        </div>
                    )
                })}
            </List>
        </>
    );
}
