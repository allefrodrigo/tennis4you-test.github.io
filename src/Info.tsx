import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from '@emotion/styled'
import AboutImage from '../src/images/about.jpeg'
import tenis4you from '../src/images/tenis4you_color.png'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const Section = styled.section`
  background: #FFFFFF;
  color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Section3 = styled.section`
background: #008337;
padding: 0 1rem 1rem 1rem;

`

const Section2 = styled.section`
    position: absolute;
    width: 50%;
    padding: 0 1rem 1rem 1rem;
    background-color: #FF3366;
`

const tiers = [
  {
    title: 'Iniciante',
    price: '0',
    description: [
     'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
  },
  {
    title: 'Profissional',
    subheader: 'Mais popular',
    price: '15',
    description: [
      'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonText: 'Agende agora!',
    buttonVariant: 'contained',
  },
  {
    title: 'Empresarial',
    price: '30',
    description: [
      'Sed ut perspiciatis unde',
      'omnis iste natus error sit',
      'voluptatem accusantium',
      'doloremque laudantium'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function CallAbout() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      

      {/* <div className="row">
  <div className='column'>
  </div>
  <div className='column'>
  <div>
      Com mais de 20 anos de experiência na área do ensino dos desportos de raquetas (Ténis e Padel), José Galante e Pedro Ferreira resolveram abraçar um projecto a dois que tivesse o seu próprio cunho. Assim, no dia 30 de Outubro de 2008, nascia a empresa Ténis4You. Sediada na Quinta dos Alcoutins, lugar paradisíaco no meio do verde do campo de Golfe do Paço do Lumiar. Com cerca de 160 alunos na Escola, baseamos o nosso ensino num método muito simples, altamente eficaz e com resultados imediatos para quem experimenta pela primeira vez!    
      </div>
  </div>
</div>
    */}
  <Section>

<Container sx={{ py: 4 }} maxWidth="lg">
  {/* End hero unit */}
      
<Grid container spacing={4} >
<Grid
              item
              xs={12}
              md={4}
            >
                 <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#1d1d1d"
          gutterBottom
        >
          Sobre nós
        </Typography>
Com mais de 20 anos de experiência na área do ensino dos desportos de raquetas, José Galante e Pedro Ferreira resolveram abraçar um projecto a dois que tivesse o seu próprio cunho. Assim, no dia 30 de Outubro de 2008, nascia a empresa Ténis4You. Sediada na Quinta dos Alcoutins, lugar paradisíaco no meio do verde do campo de Golfe do Paço do Lumiar. Com cerca de 160 alunos na Escola, baseamos o nosso ensino num método muito simples, altamente eficaz e com resultados imediatos para quem experimenta pela primeira vez!

              </Grid>
<Grid
              item
              xs={12}
              md={4}
            >
                    <img src={tenis4you} width="80%"></img>
              </Grid>
              <Grid
              item
              xs={12}
              md={4}
            >
                     <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#1d1d1d"
          gutterBottom
        >
          Tenis4You
        </Typography>
Oferecemos sempre produtos e serviços de qualidade excepcional que adicionam valor a todos os envolvidos a curto, médio e longo prazo num constante e infindável caminho de aperfeiçoamento e inovação. Treinadores credenciados pela Federação Portuguesa de Ténis de Nível-  III. Treinadores com experiência de cargos de selecionadores em Associações Regionais e na Federação Portuguesa de Ténis.   
              </Grid>

  </Grid>

  

</Container>
</Section>
    </React.Fragment>
  );
}
export default function Info() {
  return <CallAbout />;
}