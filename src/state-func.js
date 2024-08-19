import React,{useState} from "react";

export default function MessageBox(){
    const[text, setText]=useState("Hello World")
    const[size, setSize]=useState(16);

    const onClickSetText = () => {
        const t = prompt("กำหนดข้อความ");
        if(t){
            setText(t);
        }
    };
    const onClickZoomIn = () =>{
        setSize(size + 1);
    };
    const msgboxStyle = {
        display:"inline-block",
        width:350,
        fontSize:size,
        backgroundColor:"#ccc",
        padding:5,
        textAlign:"left"
    };
    return(
        <div style={{textAlign:"center",marginTop:20}}>
            <div style={msgboxStyle}>{text}</div>
            <br/>
            <br/>
            <button onClick={onClickSetText}>ข้อความ</button>&nbsp;
            <button onClick={onClickZoomIn}>เพิ่มขนาด</button>&nbsp;
            <button onClick={() => setSize(size - 1)}>ลดขนาด</button>&nbsp;
        </div>
    )
}


