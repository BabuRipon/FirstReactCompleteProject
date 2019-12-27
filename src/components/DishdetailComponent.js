import React,{Component}from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg,BreadcrumbItem,Breadcrumb,Button,Modal,ModalBody,ModalHeader,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,Errors,LocalForm}from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseUrl} from "../shared/baseUrl";

function RenderDish({dish}){
     return(
        <div className="col-12 col-md-5 m-1">
          <Card>
               <CardImg src={baseUrl+dish.image} alt={dish.name} />
               <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
               </CardBody>
           </Card>
        </div>
     ) 
   
}

const required=(val)=>(val)&&val.length;
const minLength=(len)=>(val)=>val&&(val.length>=len);
const maxLength=(len)=>(val)=>val&&(val.length<=len);

class FormComment extends Component{

   constructor(props){
      super(props);
      this.state={
         isModalOpen:false,
      }
      this.toggleModal=this.toggleModal.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
   }

   toggleModal(){
      this.setState({isModalOpen:!this.state.isModalOpen})
   }

   handleSubmit(values){
      this.toggleModal();
      alert("your details is : "+JSON.stringify(values));
      this.props.postComment(this.props.dishId,values.ratings,values.name,values.message);
   }

   render(){
      return(
         <React.Fragment>
             <Button onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>{' '}Submit Comment</Button>
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                 <ModalHeader toggle={this.toggleModal}>
                      Comment :
                 </ModalHeader>
                 <ModalBody>
                      <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                          <Row className="form-group">
                              <Col sm={12}>Ratings : </Col>
                              <Col sm={{size:11,offset:1}}>
                                <Control.select model=".ratings" name="ratings" className="form-control">
                                     <option>1</option>
                                     <option>2</option>
                                     <option>3</option>
                                     <option>4</option>
                                     <option>5</option>
                                </Control.select>
                              </Col>
                          </Row> 
                          <Row className="form-group">
                              <Col sm={12} htmlFor="name">Name</Col>
                              <Col sm={{size:11,offset:1}}>
                                  <Control.text model=".name" id="name" name="name" 
                                  placeholder="please insert your name"
                                  className="form-control"
                                  validators={
                                  {
                                     required,
                                     minLength:minLength(3),
                                     maxLength:maxLength(15)
                                  }
                                 }
                                  />
                                 <Errors 
                                 className="text-danger"
                                 model=".name"
                                 show="touched"
                                 messages={
                                    {
                                       required:'required',
                                       maxLength:'must be lessthan 15 charecter',
                                       minLength:'must be greaterthan 2 charecter'
                                    }
                                 }
                                 />
                              </Col>
                          </Row>  
                        <Row className="form-group">
                          <Col sm={12} htmlFor="message">Your Comment</Col>
                          <Col sm={{size:11,offset:1}}>
                              <Control.textarea model=".message" id="message" name="message" 
                              rows="6"
                              placeholder="please write your valuable comment"
                              className="form-control"
                              />
                             
                          </Col>
                       </Row>  
                       <Row className="form-group">
                          <Col sm={{size:11,offset:1}}>
                             <Button type="submit" color="primary">submit</Button>
                          </Col>
                       </Row>   
                      </LocalForm>
                 </ModalBody>
             </Modal>
         </React.Fragment>
      )
   }
}

function RenderComment({comments,postComment,dishId}){
     const comment=comments.map((comment)=>{
        return(
           <React.Fragment>
               <ul className="list-unstyled">
                 <li>{comment.comment}</li>
                 <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
               </ul>
           </React.Fragment>
        )
     })
     
     
         return(
            <div className="col-12 col-md-5 m-1">
                  <h3>comments</h3>
                  {comment}
                  <FormComment dishId={dishId} postComment={postComment}/>
            </div>
         )
   
}

class DishDetail extends Component{
   
   render(){
      if (this.props.isLoading) {
         return(
             <div className="container">
                 <div className="row">            
                     <Loading />
                 </div>
             </div>
         );
     }
     else if (this.props.errMess) {
         return(
             <div className="container">
                 <div className="row"> 
                     <div className="col-12">
                         <h4>{this.props.errMess}</h4>
                     </div>
                 </div>
             </div>
         );
     }
      else{
            return(
               <div className="container">
                  <div className="row">
                     <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                     </Breadcrumb>
                     <div className="col-12">
                           <h3>{this.props.dish.name}</h3>
                           <hr />
                     </div>
                  </div>
                  <div className="row">
                        <RenderDish dish={this.props.dish}  />
                        <RenderComment comments={this.props.comments} 
                        postComment={this.props.postComment}
                        dishId={this.props.dish.id}
                        />
                  </div>
               </div>
            )
   }
 }
}

export default DishDetail;