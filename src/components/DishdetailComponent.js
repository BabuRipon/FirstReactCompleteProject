import React,{Component}from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg} from 'reactstrap';

class DishDetail extends Component{

    render(){
      
        const comment=this.props.selectedDish.comments.map((comment)=>{
            return(
               <div key={comment.id}>
                 <p>{comment.comment}</p>
                 <p>-- {comment.author} , {comment.date}</p>
               </div>
            )
        });
        return(
           <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selectedDish.image}  alt={this.props.selectedDish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                    
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>comments :</h3>
                    {comment}
                </div>

           </div>
        );
    }
}


export default DishDetail;