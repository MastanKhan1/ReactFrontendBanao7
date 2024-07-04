import './body.css';
import SignIn from './SignIn';
import Features from './Features';
import TestimonialOne from './TestimonialOne';
import TestimonialTwo from './TestimonialsTwo';


const Description = ()=>{
    return(
        <>
        <div>
            <h1 className='exp-title'>Explore Your Hobby Or Passion</h1>
            <p className='para'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit libero facilis nam laborum dicta iure non eum asperiores maiores omnis velit ipsam, excepturi dignissimos esse et ab numquam? Ex hic enim veniam fuga perspiciatis dignissimos voluptatibus consectetur asperiores aut, sit repellendus nobis tenetur maxime assumenda totam incidunt repellat nemo exercitationem cumque impedit tempora vitae accusantium magnam! Alias voluptates, ab optio nulla iure et? Rem eligendi fugit nihil quae laboriosam modi minus. Odio doloremque quasi eius voluptate veritatis, assumenda doloribus sunt voluptates obcaecati hic, reprehenderit enim? Obcaecati autem corporis nam animi quaerat saepe perferendis consequatur unde! Voluptatum perferendis dolor laborum error!</p>
        </div>
        </>
    )
}

const BodyComponent = ()=>{
    return(
        <>
        <main className='main'>
            <div className='body'>
                <Description/>
                <SignIn/>
            </div>
        </main>
        </>
    )
}

const Body = ()=>{
    return(
        <>
            <BodyComponent/>
            <Features/>
            <TestimonialOne/>
            <TestimonialTwo/>
        </>
    )
}

export default Body;