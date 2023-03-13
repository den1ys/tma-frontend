import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState, useRef } from "react";

export default function DialogRadio({ open, onClose, title, options }) {
    const [value, setValue] = useState(0);
    const radioGroupRef = useRef(null);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleValueChange = (event) => {
        setValue(Number(event.target.value));
    };

    const handleCancelClick = () => {
        onClose(null);
    };

    const handleOkClick = () => {
        if (!value) {
            return false;
        }

        onClose(value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
        >
            <DialogTitle>{title}</DialogTitle>

            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    name="radio"
                    value={value}
                    onChange={handleValueChange}
                >
                    {options.map(({ id, text }) => (
                        <FormControlLabel
                            value={id}
                            key={id}
                            control={<Radio />}
                            label={text}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={handleCancelClick}>Cancelar</Button>

                <Button onClick={handleOkClick}>Aceptar</Button>
            </DialogActions>
        </Dialog>
    );
}