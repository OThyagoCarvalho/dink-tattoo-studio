import React from 'react';
import Card from './Card/index';
import { Container } from './style';
import dhyego from  '../../images/dhyego.png'
import cleyton from  '../../images/cleyton.png'
import raquel from  '../../images/raquel.png'


export default function About() {
    const employees = {
        dhyego: {
            name: 'dhyego',
            description: `Nascido no subúrbio carioca, dhyego descobriu na
            tatuagem a sua verdadeira paixão. Após isso, largou a
            faculdade e decidiu seguir seu sonho, dedicando-se
            exclusivamente à tatuagem desde então.`,
            avatarUrl:
                dhyego,

            tags: ['pontilhismo', 'blackwork']
        },
        cleyton: {
            name: '300TATTOO',
            description: `"Teve contato com o desenho desde muito novo e há 4 anos conheceu o universo da tatuagem. Sempre se aprimorando e se desenvolvendo, atualmente se dedica ao realismo."`,
            avatarUrl:
                cleyton,
            tags: ['realismo', 'blackwork', 'preto e cinza']
        },
        raquel: {
            name: 'Raquel',
            description: `"Natural de Brasília, Raquel teve seu primeiro contato com a arte pintando telas e quadros, mas eventualmente descobriu sua paixão por tatuagem. Atualmente se especializa no estilo Old School"`,
            avatarUrl:
                raquel,
            tags: ['oldschool', 'blackwork', 'new traditional']
        }
    };

    return (
        <Container>
            <h2> O NOSSO TIME </h2>
            <div>
                <Card
                    key={employees.dhyego.name}
                    name="dhyego"
                    description={employees.dhyego.description}
                    tags={employees.dhyego.tags}
                    avatarUrl={employees.dhyego.avatarUrl}
                />
                 <Card
                    key={employees.cleyton.name}
                    name="cleyton"
                    description={employees.cleyton.description}
                    tags={employees.cleyton.tags}
                    avatarUrl={employees.cleyton.avatarUrl}
                />
                <Card
                    key={employees.raquel.name}
                    name="raquel"
                    description={employees.raquel.description}
                    tags={employees.raquel.tags}
                    avatarUrl={employees.raquel.avatarUrl}
                />
            </div>
        </Container>

    );
}
