import React from "react";
import { useState } from "react";
import "./Modal.css";
import 'react-responsive-modal/styles.css';
import Button from "@mui/material/Button";
import { SketchPicker, BlockPicker } from "react-color";
import { IconButton, Typography } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import { useDispatch, useSelector } from "react-redux";
import { setColorTheme } from "state";
import { Grid } from "@mui/material";
import { Modal } from "react-responsive-modal";
// import ColorPicker from "./ColorPicker";

export default function ColorModal() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  // const toggleModal = () => {
  //   setModal(!modal);
  // };
  const primary_dark = useSelector((state) => state.colorTheme.primary.dark);
  const primary_main = useSelector((state) => state.colorTheme.primary.main);
  const primary_light = useSelector((state) => state.colorTheme.primary.light);

  const neutral_dark = useSelector((state) => state.colorTheme.neutral.dark);
  const neutral_main = useSelector((state) => state.colorTheme.neutral.main);
  const neutral_mediumMain = useSelector((state) => state.colorTheme.neutral.mediumMain);
  const neutral_medium = useSelector((state) => state.colorTheme.neutral.medium);
  const neutral_light = useSelector((state) => state.colorTheme.neutral.light);

  const background_default = useSelector((state) => state.colorTheme.background.default);
  const background_alt = useSelector((state) => state.colorTheme.background.alt);

  const [currentColor, setCurrentColor] = useState("#ff6");

  const littleLorem = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
      risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
      risus, sed porttitor quam.
    </p>
  );

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  

  return (
    <>
      <IconButton
        onClick={() =>
          dispatch(
            setColorTheme({ first: "primary", second: "dark", color: "#FFFF" })
          )
        }
      >
        <PaletteIcon onClick={onOpenModal} sx={{ fontSize: "25px" }} />
      </IconButton>
      
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="color-modal-title">Theme Settings</h2>
        <Grid sx={{alignItems: 'center', justifyContent: 'center',}} container spacing={4}>
          {/* Primary */}
          <Grid item xs={4}>
            <h5 className="color-modal-title">Primary Dark</h5>
            <SketchPicker
              width="100%"
              color={primary_dark}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "primary",
                  second: "dark",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <h5 className="color-modal-title">Primary Main</h5>
            <SketchPicker
              width="100%"
              color={primary_main}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "primary",
                  second: "main",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <h5 className="color-modal-title">Primary Light</h5>
            <SketchPicker
              width="100%"
              color={primary_light}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "primary",
                  second: "light",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          {/* Neutral */}
          <Grid item xs={2}>
            <h5 className="color-modal-title">Neutral Dark</h5>
            <SketchPicker
              width="100%"
              color={neutral_dark}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "neutral",
                  second: "dark",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <h5 className="color-modal-title">Neutral Main</h5>
            <SketchPicker
              width="100%"
              color={neutral_main}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "neutral",
                  second: "main",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <h5 className="color-modal-title">Neutral Medium Main</h5>
            <SketchPicker
              width="100%"
              color={neutral_mediumMain}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "neutral",
                  second: "mediumMain",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <h5 className="color-modal-title">Neutral Medium</h5>
            <SketchPicker
              width="100%"
              color={neutral_medium}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "neutral",
                  second: "medium",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <h5 className="color-modal-title">Neutral Light</h5>
            <SketchPicker
              width="100%"
              color={neutral_light}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "neutral",
                  second: "light",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          {/* background */}
          <Grid item xs={6}>
            <h5 className="color-modal-title">Background Default</h5>
            <SketchPicker
              width="100%"
              color={background_default}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "background",
                  second: "default",
                  color: color.hex
                }));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <h5 className="color-modal-title">Background Alt</h5>
            <SketchPicker
              width="100%"
              color={background_alt}
              onChangeComplete={(color) => {
                dispatch(setColorTheme({
                  first: "background",
                  second: "alt",
                  color: color.hex
                }));
              }}
            />
          </Grid>         
        </Grid>
      </Modal>
    </>
  );
}
