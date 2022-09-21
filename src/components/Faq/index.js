import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MaxContentContainer, SectionContainer } from './style';

export default function Faq() {
    return (
        <SectionContainer>
            <MaxContentContainer>
                {/* there's a more elegant - and verbose - way to handle custom reusable components using the 'styled()' utility. Should be refactored eventualy. Doc ref.: https://mui.com/pt/material-ui/customization/how-to-customize/#2-reusable-component */}
                <Accordion  sx={{backgroundColor: '#111', color:'#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        
                    >
                        <Typography fontWeight={600}>Onde Estamos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Estamos na Rua Muito Engraçada, Não Tinha Teto - Não Tinha Nada. CEP: 00000-000;
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor: '#111', color:'#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography fontWeight={600}>Como funciona o orçamento?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Após entrar em contato, solicitaremos que nos envie a foto da sua arte em boa resolução ou no caso de desejar uma arte original, solicitaremos algumas referências. Analisaremos e entraremos em contato com algumas sugestões e caso aprove a ideia do artista, passaremos o valor e cobraremos um pequeno sinal para início do desenvolvimento da arte.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor: '#111', color:'#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography fontWeight={600}>O que influencia o valor final?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        O orçamento leva em conta o tamanho da arte e o tempo estimado para finalizá-la. No caso de criações originais, o orçamento também leva em conta o tempo gasto no desenvolvimento da arte.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor: '#111', color:'#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography fontWeight={600}>Quais são as formas de pagamento?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Aceitamos as principais formas de pagamento: Dinheiro, PIX, Débito, Crédito e parcelamos com ou sem juros a depender do valor final e do número de parcelas.
                    </AccordionDetails>
                </Accordion>
            </MaxContentContainer>
        </SectionContainer>
    );
}
