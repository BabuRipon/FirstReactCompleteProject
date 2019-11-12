import React,{Component}from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg} from 'reactstrap';

class DishDetail extends Component{


   renderDish(dish){
      if(dish===undefined){
         return <div></div>
      }
      else{
         return <DishShow dish={dish}/>
      }
   }

   render(){
     const dish=this.props.dish;
     return(
        <div className="container " >
          
            {this.renderDish(dish)}
         
        </div>
          
     );

   }
}

class DishShow extends Component{

   render(){
     
       const comment=this.props.dish.comments.map((comment)=>{
          return (
             <div key={comment.id}>
               <p>{comment.comment}</p>
               <p> -- {comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
             </div>
          )
       })


      return(
             <div className="row"> 
                <div className="col-12 col-md-5 m-1">
                    <Card>
                       <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                       <CardBody>
                         <CardTitle>{this.props.dish.name}</CardTitle>
                         <CardText>{this.props.dish.description}</CardText>
                       </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                     <h3>comments:</h3>
                     {comment}
                </div>
            </div>
      );
   }
}



export default DishDetail;