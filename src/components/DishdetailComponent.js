import React,{Component}from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish({dish}){
     return(
        <div className="col-12 col-md-5 m-1">
          <Card>
               <CardImg src={dish.image} alt={dish.name} />
               <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
               </CardBody>
           </Card>
        </div>
     ) 
}

function RenderComment({comments}){
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
        </div>
     )
}

class DishDetail extends Component{
   render(){
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
                   <RenderDish dish={this.props.dish}/>
                   <RenderComment comments={this.props.comments} />
              </div>
          </div>
      )
   }
}

export default DishDetail;