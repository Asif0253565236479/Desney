import styled, { isStyledComponent } from 'styled-components'

export default function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/logo/ctalogo.png" alt="" />
                    <SingUp>Get it all</SingUp>
                    <Discription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum quam nemo iure commodi vero exercitationem voluptates deserunt incidunt voluptatibus expedita, distinctio tempora consequuntur, impedit doloribus recusandae laboriosam quos! Repudiandae?</Discription>
                    <CTALogoTwo src="/images/logo/ctalogo.png" alt="" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}


const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-aling: center;
height: 100vh;
`;


const Content = styled.div`

width: 100%;
height:100vh;
box-sizing: border-box;
display: flex;
position: relative;
justify-content: center;
aling-items: center;
flex-direction: column;
height: 100%;
padding: 80px 40px;
`
;

const BgImage = styled.div`
height: 100%;
background-size: cover;
background-image: url("/images/background/disney.jpeg");
position: absolute;
top: 0;
left: 0;
right: 0;
background-repeat: no-repeat;
background-blend-mode: overlay;
background-color: #2F2F2F;
`;


const CTA = styled.div`
z-index: 1;
max-width: 680px;
margin-bottom: 2vw;
display: flex;
flex-direction: column;
justify-content: center;
aling-items: center;
text-aling: center;
margin-right: auto;
margin-left: auto;
width: 100%;
`;

const CTALogoOne = styled.img`
max-width: 680px;
width:100%;
margin-bottom: 12px;

`;

const SingUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
font-size: 20px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid transprent;
border-radius: 4px;
padding: 14px 0;
margin-bottom: 12px;
cursor: pointer;
&:hover{
    background: #0483ee;
}
`;



const Discription = styled.p`
color: #fcfcfc;
font-size: 14px;
line-height: 1.5;
font-weight: normal;
margin: 0 0 24px;
`;

const CTALogoTwo = styled.img`
margin-bottom: 24px;
width: 100%;
`;