
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useDispatch,useSelector} from "react-redux";
import {updateArticle} from "@/slices/productSlice"
import {getScategories} from "@/slices/scategorieSlice"

import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

import {UploadFirebase} from '../../utils/UploadFirebase';

import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

const UpdateArticle = (props) => {
  
 const [_id,setId]=useState();

  const [file, setFile] = useState("");

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [validated, setValidated] = useState(false);
const [reference, setReference] = useState("");
const [designation, setDesignation] = useState("");
const [prix, setPrix] = useState("");
const [marque, setMarque] = useState("");
const [qtestock, setQtestock] = useState("");
const [scategorieID, setScategorieID] = useState("");
const [imageart, setImageart] = useState();
const dispatch = useDispatch();
const {scategories,isLoading} = useSelector((state) =>state.storescategories);

useEffect(() => {
    setId(props.articles._id);
    setReference(props.articles.reference);
    setDesignation(props.articles.designation);
    setPrix(props.articles.prix);
    setMarque(props.articles.marque);
    setQtestock(props.articles.qtestock);
    setScategorieID(props.articles.scategorieID);
    setImageart(props.articles.imageart);
         }, []);
  

useEffect(() => {
dispatch(getScategories());
},[dispatch]);

const handleSubmit = (url) => {
    setImageart(url)
  const article={
  _id:_id,  
  reference: reference,
  designation: designation,
  prix: prix,
  marque: marque,
  qtestock: qtestock,
  imageart: url?url:imageart,
  scategorieID: scategorieID
  }
  dispatch(updateArticle(article))
  .then(res=>{
  console.log("Update OK",res);
  setReference("");
  setDesignation("");
  setPrix("");
  setMarque("");
  setFile(null)
  setQtestock("");
  setScategorieID("");
  setValidated(false);
  handleClose()
  })
  .catch(error=>{
  console.log(error)
  alert("Erreur ! Modification non effectuée")
  })
 
  };

 const handleUpload = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
   if (form.checkValidity() === true) {
          if (file) {
            console.log(file[0].file)
            resultHandleUpload(file[0].file,event);
          }
         else{
            const url = ""
            handleSubmit(url)
         }
      }
   setValidated(true);
};

const resultHandleUpload = async(file) => {
    
    try {
     
    const url =  await UploadFirebase(file);
    console.log(url);
 
    handleSubmit(url)
   } catch (error) {
      console.log(error);
   }

}


return (
  <>
  <span 
  onClick={handleShow}>
  <NoteAltOutlinedIcon />
  </span>
  <Modal show={show} onHide={handleClose}>
  <Form noValidate validated={validated}>
  <Modal.Header closeButton>
  <Modal.Title> <h1 align="center">Modification Article</h1></Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <div className="container w-100 d-flex justify-content-center">
  <div>
  
  <div className='form mt-3'>
  <Row className="mb-2">
  <Form.Group as={Col} md="6" >
  <Form.Label >Référence *</Form.Label>
  <Form.Control
  required
  type="text"
  placeholder="Référence"
  value={reference}
  onChange={(e)=>setReference(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Saisir Référence Article
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="6">
  <Form.Label>Désignation *</Form.Label>
  <Form.Control
  required
  type="text"
  placeholder="Désignation"
  value={designation}
  onChange={(e)=>setDesignation(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Saisir Désignation
  </Form.Control.Feedback>
  </Form.Group>
  </Row>
  <Row className="mb-2">
  <Form.Group className="col-md-6">
  <Form.Label>Marque *</Form.Label>
  <InputGroup hasValidation>
  <Form.Control
  type="text"
  required
  placeholder="Marque"
  value={marque}
  onChange={(e)=>setMarque(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Marque Incorrecte
  </Form.Control.Feedback>
  </InputGroup>
  </Form.Group>
  <Form.Group as={Col} md="6">
<Form.Label>Prix</Form.Label>
<Form.Control
type="number"
placeholder="Prix"
value={prix}
onChange={(e)=>setPrix(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group className="col-md-6 ">
<Form.Label>
Qté stock<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="number"
value={qtestock}
onChange={(e)=>setQtestock(e.target.value)}
placeholder="Qté stock"
/>
<Form.Control.Feedback type="invalid">
Qté stock Incorrect
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Image</Form.Label>
{!file?<img src={imageart} style={{width:100, height:50}}/> :null} 
               
                 <div style={{width:200, height:150}}>
              <FilePond
                     files={file}
                     allowMultiple={false}
                     onupdatefiles={setFile}
                     labelIdle='<span class="filepond--label-action">Browse One</span>'
                    />
                 </div>

</Form.Group>
<Form.Group as={Col} md="12">
<Form.Label>S/Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
value={scategorieID}
onChange={(e)=>setScategorieID(e.target.value)}
>
{!isLoading? scategories.map((scat)=><option key={scat._id}
value={scat._id}>{scat.nomscategorie}</option>):null}
</Form.Control>
</Form.Group>
</Row>
</div>
</div>
</div>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
Fermer
</Button>
<Button type="button" onClick={(event)=>handleUpload(event)}>Enregistrer</Button>
</Modal.Footer>
</Form>
</Modal>
</>
)
}
export default UpdateArticle