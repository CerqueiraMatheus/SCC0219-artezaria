import {User, UserTypes} from "../domain/User";

const MUNCH_BIO =
    "Edvard Munch foi um pintor expressionista que estudou na Escola de Artes e Ofícios de Oslo, vindo a ser influenciado por Courbet e Manet. No lugar das ideias, o pensamento de Henrik Ibsen e Bjornson. Marcou o seu percurso inicial. A arte era considerada como uma arma destinada a lutar contra a sociedade. Os temas sociais estão assim presentes em O Dia Seguinte e O dia depois de amanhã, de 1886.\n\n" +
    "Com A Menina Doente (Das Kränke Mädchen, 1885) inicia uma temática que surgiria como uma linha de força em todo o seu caminho artístico. Fez inúmeras variações sobre este último trabalho, assim como sobre outras obras, e os seus sentimentos sobre a doença e a morte, que tinham marcado a sua infância (sua mãe morreu quando ele tinha 5 anos, a irmã mais velha faleceu aos 15 anos, a irmã mais nova sofria de doença mental e uma outra irmã morreu meses depois de casar; o próprio Edvard estava constantemente doente), assumem um significado mais vasto, transformados em imagens que deixavam transparecer a fragilidade e a transitoriedade da vida. Edvard Munch descobre em Paris a obra de Vincent van Gogh, Paul Gauguin e Toulouse-Lautrec, e indubitavelmente o seu estilo passa então por grandes mudanças.\n\n" +
    "Em 1892 um convite para expor em Berlim torna-se num momento crucial da sua carreira e da história da arte alemã. Inicia um projecto que intitula O Friso da Vida. Edvard Munch representou a dança em 1950.\n\n" +
    "Aos trinta anos ele pinta \"O Grito\", considerada a sua obra máxima, e uma das mais importantes da história do expressionismo. O quadro retrata a angústia e o desespero, e foi inspirado nas decepções do artista tanto no amor quanto com seus amigos. É uma das peças da série intitulada O Friso da Vida. Os temas da série recorrem durante toda a obra de Munch, em pinturas como A Menina Doente (1885), Amor e Dor (1893-94), Cinzas (1894) e A Ponte. Rostos sem feições e figuras distorcidas fazem parte de seus quadros.\n\n" +
    "Em 1896, em Paris, interessa-se pela gravura, fazendo inovações nesta técnica. Os trabalhos deste período revelam uma segurança notável. Em 1914, inicia a execução do projeto para a decoração da Universidade de Oslo, usando uma linguagem simples, com motivos da tradição popular. É acometido pela Gripe Espanhola, a partir da qual pinta o quadro Autorretrato com a Gripe Espanhola de 1919 (ver no álbum abaixo), mas supera a doença.\n\n" +
    "Faleceu em 23 de janeiro de 1944. Encontra-se sepultado no Cemitério de Nosso Salvador, Oslo, na Noruega.";

export const userClient = new User({
        _id: "1",
        name: "Matheus",
        lastName: "Cerqueira",
        email: "cliente@site.com",
        password: "cliente123",
        address: "Endereço do cliente",
        type: UserTypes.CLIENT
    }
);

export const userArtist = new User({
        _id: "2",
        name: "Edvard",
        lastName: "Munch",
        email: "artesao@site.com",
        password: "artesao123",
        address: "Endereço do artesão",
        type: UserTypes.ARTIST,
        description: MUNCH_BIO
    }
);

export const userArtist2 = new User({
        _id: "5",
        name: "Gustavo",
        lastName: "Munch",
        email: "artesao@site.com",
        password: "artesao123",
        address: "Endereço do artesão",
        type: UserTypes.ARTIST,
        description: MUNCH_BIO
    }
);

export const userAdmin = new User({
        _id: "3",
        name: "Super",
        lastName: "User",
        email: "admin@site.com",
        password: "admin123",
        type: UserTypes.ADMIN
    }
);

export let USERS = [
    userClient,
    userArtist,
    userArtist2,
    userAdmin
]