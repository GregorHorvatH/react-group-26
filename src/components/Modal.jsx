import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  backDrop: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  modal: {
    width: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
  },
});

const Modal = ({ onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.backDrop} onClick={onClose}>
      <div className={classes.modal}>
        <h3>My awesome Modal Window</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          perferendis inventore sapiente quam reiciendis asperiores doloribus
          mollitia vitae suscipit qui unde, repellat soluta, reprehenderit
          doloremque, quas pariatur sed rerum impedit?
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
