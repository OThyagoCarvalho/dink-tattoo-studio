import React from 'react';
import Card from './Card/index';
import { MaxContentContainer, SectionContainer } from './style';
import dhyego from  '../../images/dhyego.png'
import cleyton from  '../../images/cleyton.png'
import raquel from  '../../images/raquel.png'


export default function About() {
    const employees = {
        diego: {
            name: 'diego',
            description: `Nascido no subúrbio carioca, dhyego descobriu na
            tatuagem a sua verdadeira paixão. Após isso, largou a
            faculdade e decidiu seguir seu sonho, dedicando-se
            exclusivamente à tatuagem desde então.`,
            avatarUrl:
                dhyego,

            tags: ['geek', 'blackwork']
        },
        cleiton: {
            name: '300TATTOO',
            description: `Teve contato com o desenho desde muito novo e há 4 anos conheceu o universo da tatuagem. Sempre se aprimorando e se desenvolvendo, atualmente se dedica ao realismo.`,
            avatarUrl:
                cleyton,
            tags: ['realismo', 'preto e cinza']
        },
        raquel: {
            name: 'Raquel',
            description: `Natural de Brasília, Raquel teve seu primeiro contato com a arte pintando telas e quadros, mas eventualmente descobriu sua paixão por tatuagem. Atualmente se especializa no estilo Old School`,
            avatarUrl:
                raquel,
            tags: ['oldschool', 'neo traditional']
        }
    };

    return (
        <SectionContainer id="about">            
            <MaxContentContainer>
                <Card
                    key={employees.diego.name}
                    name="Diego"
                    description={employees.diego.description}
                    tags={employees.diego.tags}
                    avatarUrl={employees.diego.avatarUrl}
                />
                 <Card
                    key={employees.cleiton.name}
                    name="Cleiton"
                    description={employees.cleiton.description}
                    tags={employees.cleiton.tags}
                    avatarUrl={employees.cleiton.avatarUrl}
                />
                <Card
                    key={employees.raquel.name}
                    name="Raquel"
                    description={employees.raquel.description}
                    tags={employees.raquel.tags}
                    avatarUrl={employees.raquel.avatarUrl}
                />
            </MaxContentContainer>
        </SectionContainer>

    );
}
