
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/AboutUs'>ABOUT</Link>
                <Link to='/ContactUs'>FEEDBACK</Link>
                <Link to='/login'>LOGOUT</Link>
                <Link to='/posts'>POSTS</Link>
            </Container>
        </Component>
    )
}

export default Header;