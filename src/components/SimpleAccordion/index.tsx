import * as React from 'react'
import * as S from './styles'
import { useState } from 'react'
import { Accordion } from '@material-ui/core'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import { BsChevronDown } from 'react-icons/bs'
import { Input } from '../../@shared/Input'
import { BiSearch } from 'react-icons/bi'

export default function SimpleAccordion() {
  const [faqList] = useState([
    {
      Title:
        'O que é o autismo',
      texto: 'É um distúrbio neurológico que, atualmente, se encaixa no Transtorno do Espectro Autista (TEA). As pessoas com autismo possuem dificuldades na reciprocidade socioemocional, em comportamentos comunicativos não verbais e na interação social. Então, o modo de interagir com o mundo é diferente para essas pessoas. Por exemplo: elas possuem dificuldade de iniciar e em manter uma conversa e de manter contato visual. Além disso, há a presença de características de comportamentos restritos ou repetitivos. Isso pode ser por repetição de palavras ou frases, uso de objetos de maneira diferente do habitual, interesses por assuntos específicos, forte adesão a rotinas, sensibilidade a texturas (como tocar ou cheirar objetos de forma excessiva), entre outros. No caso de um diagnóstico de TEA positivo, estes elementos estão presentes desde o início da infância, inclusive alguns sinais são visíveis antes dos 2 anos de idade, e causam prejuízo para o desenvolvimento e adaptação desta pessoa. '
    },
    {
      Title:
        'Por que atualmente o autismo é chamado de TEA',
      texto: 'A partir da 5ª edição do Manual de Diagnóstico e Estatístico de Transtornos Mentais (DSM-5), versão atual da referência mundial para diagnósticos de transtornos mentais, o autismo foi englobado no chamado Transtorno do Espectro Autista (TEA). O TEA tornou-se um diagnóstico único que inclui alguns transtornos do desenvolvimento infantil que envolvem prejuízos sociais. Ou seja, o TEA atualmente inclui o autismo e outros distúrbios como a Síndrome de Asperger, o Transtorno Reintegrativo da Infância e o Transtorno Global do Desenvolvimento sem outra especificação. '
    },
    {
      Title:
        'Qual é a causa do autismo',
      texto: 'As causas do TEA não são totalmente conhecidas, e a pesquisa científica sempre concentrou esforços no estudo da predisposição genética, analisando mutações espontâneas que podem ocorrer no desenvolvimento do feto e a herança genética passada de pais para filhos. No entanto, já há evidências de que as causas hereditárias explicariam apenas metade do risco de desenvolver TEA. Fatores ambientais que impactam o feto, como estresse, infecções, exposição a substâncias tóxicas, complicações durante a gravidez e desequilíbrios metabólicos teriam o mesmo peso na possibilidade de aparecimento do distúrbio.  '
    },
    {
      Title:
        'Quais os sintomas de autismo',
      texto: 'Os sintomas se baseiam na ocorrência de um desenvolvimento diferente do que seria esperado para a faixa etária, e podem variar na maneira e intensidade com que se manifestam em cada pessoa. Alguns dos sintomas podem ser: demora para começar a falar, evitar olhar nos olhos, não atender ao chamado do nome, não apontar, não brincar com crianças da mesma idade, não brincar de faz de conta, não entender linguagem figurada, brincar com brinquedos de maneira incomum (ex: ficar girando a roda de um carrinho), demonstrar maior interesse por objetos do que por pessoas, realizar movimentos repetitivos, choros inapropriados, sensibilidade a sons, não gostar de toque, entre outros. '
    },
    {
      Title:
        'O que é a Síndrome de Asperger',
      texto: 'A Síndrome ou Transtorno de Asperger é um dos transtornos que se enquadra atualmente no TEA segundo o DSM-5. Isto ocorre porque o transtorno de Asperger compartilha sintomas e critérios diagnósticos com o autismo leve, também conhecido como autismo de alta funcionalidade. Desta forma, as pessoas com Asperger fazem parte do espectro autista, e o seu tratamento segue a linha dos outros distúrbios do TEA, sempre com adaptações para as particularidades de cada caso.'
    },
    {
      Title:
        'Existem diferentes graus de autismo',
      texto: 'Sim, existem diferentes graus. O DSM-5 rotula os distúrbios que fazem parte do TEA como um espectro justamente por eles se manifestarem em diferentes níveis de intensidade. Uma pessoa diagnosticada como de alta funcionalidade apresenta prejuízos leves, que podem não a impedir de estudar, trabalhar e se relacionar. Um paciente de média funcionalidade tem um menor grau de independência e necessita de algum auxílio para desempenhar funções cotidianas, como tomar banho ou preparar a sua refeição. Já alguém com baixa funcionalidade vai manifestar dificuldades graves e costuma precisar de apoio especializado ao longo da vida. '
    },
    {
      Title:
        'Como é confirmado o diagnóstico de autismo',
      texto: 'O diagnóstico de autismo é clínico, ou seja, não existe um exame laboratorial ou de imagem que possa comprovar a presença do transtorno. Ele deve ser realizado por um profissional de saúde especializado, como um neuropediatra ou psiquiatra infantil. O diagnóstico do TEA deve seguir critérios definidos internacionalmente, com avaliação completa da criança, entrevista com os pais e cuidadores e uso de escalas validadas. '
    },
    {
      Title:
        'Com que idade o diagnóstico pode ser feito',
      texto: 'A Sociedade Brasileira de Pediatria orienta que toda criança seja avaliada para TEA entre 18 e 24 meses de idade, mesmo que não tenha sinais clínicos claros e evidentes deste diagnóstico ou de outros atrasos do desenvolvimento. Nos atendimentos pelo Sistema Único de Saúde (SUS), a avaliação pela escala M-CHAT é obrigatória para crianças nesta faixa etária em consultas pediátricas de acompanhamento, segundo a lei 13.438/17. Caso você suspeite de comportamentos do seu filho, peça ao pediatra para aplicar o teste e busque um especialista, se necessário. '
    },
    {
      Title:
        'Desconfio que meu filho tem autismo, o que eu devo fazer',
      texto: 'O melhor é marcar uma consulta com um especialista. No setor privado, há diversos profissionais disponíveis e o mais indicado é buscar um neuropediatra ou um psiquiatra infantil. No SUS, o responsável pode procurar o posto de saúde (UBS) mais próximo para ser encaminhado para um setor de especialidades ou seguir diretamente para o Centro de Atenção Psicossocial (CAPs) da sua região. Se você está buscando ajuda especializada, a nossa base de instituições de apoio reúne profissionais qualificados em todo o Brasil.'
    },
    {
      Title:
        ' Existe algum exame para que confirma o autismo',
      texto: 'Não há um exame para diagnosticar o TEA. O diagnóstico é clínico e deve ser realizado por um profissional de saúde especializado, como um neuropediatra ou psiquiatra infantil. Se você está buscando ajuda especializada, a nossa comunidade reúne profissionais qualificados em todo o Brasil.'
    },
    {
      Title:
        'Autismo tem cura',
      texto: 'O TEA é uma condição permanente que acompanha a pessoa por todas as etapas da vida. Mas há tratamentos, com diferentes abordagens terapêuticas, que ajudam a amenizar os sintomas e melhorar a qualidade de vida dos pacientes. '
    },
    {
      Title:
        'Existe tratamento para autismo',
      texto: 'Sim, existe. O tratamento de autismo é multidisciplinar, e pode envolver, por exemplo: pediatra, neurologista, psiquiatra, enfermeiro, terapeuta ocupacional, psicólogo, educador físico, fonoaudiólogo, entre outros. É importante ressaltar que existem vários graus de autismo e que as pessoas são naturalmente diferentes entre si e, por isso, o tratamento difere de pessoa para pessoa. Mas uma coisa é unanimidade entre os especialistas: o acompanhamento especializado desde o início da infância pode amenizar significativamente os sintomas e reduzir em até dois terços os custos dos cuidados ao longo da vida. '
    },
    {
      Title:
        'Meu filho foi diagnosticado como autista. O que devo fazer',
      texto: 'A primeira coisa a ser feita é definir o plano de tratamento personalizado de acordo com as necessidades do seu filho. O tratamento é multidisciplinar, e pode envolver, por exemplo: pediatra, neurologista, psiquiatra, enfermeiro, terapeuta ocupacional, psicólogo, educador físico, fonoaudiólogo, entre outros. A conduta indicada vai depender da intensidade do distúrbio e da idade do paciente e deve ser decidido junto aos pais. Para saber mais do que fazer logo após a confirmação do diagnóstico de TEA'
    },
    {
      Title:
        'Por que o tratamento precoce é importante',
      texto: 'O diagnóstico precoce permite antecipar o tratamento adequado para o tipo de transtorno e o nível de funcionalidade da pessoa com TEA. Quanto antes o tratamento se iniciar, melhor será o desenvolvimento e a qualidade de vida do autista. Outro ponto positivo relevante é que o acompanhamento especializado desde cedo pode reduzir em até dois terços os custos dos cuidados ao longo da vida. '
    },
    {
      Title:
        'A família também deveria fazer terapia',
      texto: 'Ao receber uma criança com autismo, geralmente a família toda passa por grandes mudanças. Essas mudanças podem trazer dificuldades que poderiam ser auxiliadas com a terapia. Essa terapia poderia ser com psicólogos individualmente ou mesmo em grupos, como em “grupos de pais”.'
    },
    {
      Title:
        ' Existe remédio para autismo',
      texto: 'Não existe remédio para o autismo em si, mas os pacientes com TEA podem fazer uso de medicamentos para tratar condições associadas, como insônia, hiperatividade, agressividade, falta de atenção, ansiedade, depressão e comportamentos repetitivos. '
    },
    {
      Title:
        ' A pessoa com autismo conseguirá trabalhar quando adulta',
      texto: 'É possível sim que um autista trabalhe e tenha uma vida mais independente quando adulto. Muitos fatores vão influenciar as habilidades sociais e a autonomia da pessoa com TEA, em especial a gravidade do distúrbio e o tratamento precoce. Vale destacar também que a Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista determina o direito dos autistas ao trabalho, entre outras coisas.'
    },
    {
      Title:
        'O autismo é uma doença rara',
      texto: 'Segundo a Sociedade Brasileira de Pediatria, a prevalência de autismo vem aumentando com o passar dos anos, principalmente, pelo aumento de diagnósticos adequados. Nos Estados Unidos, por exemplo, do TEA aumentou de 1 para cada 150 crianças de 8 anos em 2000, para 1 para cada 68 crianças em 2010, chegando à prevalência de 1 para cada 58 em 2014, mais que duplicando o número de casos durante esse período. '
    },
    {
      Title:
        'Homens e mulheres possuem as mesmas chances de desenvolver autismo',
      texto: 'Segundo a Sociedade Brasileira de Pediatria, o TEA manifesta-se em indivíduos de diversas etnias ou raças e em todos os grupos socioeconômicos. Mas a sua prevalência é 4 vezes maior em meninos do que em meninas. Inclusive, por isso, a cor associada ao autismo é o azul.'
    },
    {
      Title:
        'Quais são os direitos e benefícios sociais dos autistas',
      texto: 'A Lei Berenice Piana (12.764/12) estipula que a pessoa com transtorno do espectro autista é considerada pessoa com deficiência para todos os efeitos legais, garantindo aos autistas as mesmas proteções do Estatuto da Pessoa com Deficiência. Para saber mais sobre a legislação que protege as pessoas com TEA. '
    }
  ])

  const [search, setSearch] = useState('')

  const filteredAccordionList = search.length > 0 ? faqList.filter(accordion => accordion.Title.includes(search)) : faqList

  return (
    <>
      <S.Header>
        <span>FAQ</span>
        <Input onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Pesquise aqui...">
          <BiSearch />
        </Input>
      </S.Header>
      <S.ContainerContent>
        {filteredAccordionList.map((res, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<BsChevronDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontSize: '20px' }}>
                  {res.Title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {res?.texto}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
        {/* <Accordion disabled>
          <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion> */}
      </S.ContainerContent>
    </>
  )
}
