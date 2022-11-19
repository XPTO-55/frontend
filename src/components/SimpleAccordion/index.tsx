import * as React from 'react'
import { Accordion } from '@material-ui/core'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import { BsChevronDown } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import * as S from './styles'
import { useState } from 'react'
import { Input } from '../Input'

export default function SimpleAccordion() {
  const [faqList] = useState([
    {
      Title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut porttitor libero?'
    },
    {
      Title:
        'Cras eget mauris tincidunt, euismod ipsum nec, rhoncus velit. Nullam posuere justo nulla, quis aliquam massa finibus vel?'
    },
    {
      Title:
        'Aenean quis tincidunt elit, quis rutrum odio. Fusce blandit quam at est faucibus, et ornare urna egestas.'
    },
    {
      Title:
        'In arcu enim, vehicula non velit a, commodo sollicitudin nisi. Maecenas eros mauris, ultrices sed nibh eget bibendum?'
    },
    {
      Title:
        'Sed ornare, enim a venenatis sollicitudin, neque massa tristique tellus, nec blandit justo odio eu urna. Sed in.'
    },
    {
      Title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut porttitor libero?'
    },
    {
      Title:
        'Cras eget mauris tincidunt, euismod ipsum nec, rhoncus velit. Nullam posuere justo nulla, quis aliquam massa finibus vel?'
    },
    {
      Title:
        'Aenean quis tincidunt elit, quis rutrum odio. Fusce blandit quam at est faucibus, et ornare urna egestas.'
    },
    {
      Title:
        'In arcu enim, vehicula non velit a, commodo sollicitudin nisi. Maecenas eros mauris, ultrices sed nibh eget bibendum?'
    },
    {
      Title:
        'Sed ornare, enim a venenatis sollicitudin, neque massa tristique tellus, nec blandit justo odio eu urna. Sed in.'
    },
    {
      Title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut porttitor libero?'
    },
    {
      Title:
        'Cras eget mauris tincidunt, euismod ipsum nec, rhoncus velit. Nullam posuere justo nulla, quis aliquam massa finibus vel?'
    },
    {
      Title:
        'Aenean quis tincidunt elit, quis rutrum odio. Fusce blandit quam at est faucibus, et ornare urna egestas.'
    },
    {
      Title:
        'In arcu enim, vehicula non velit a, commodo sollicitudin nisi. Maecenas eros mauris, ultrices sed nibh eget bibendum?'
    },
    {
      Title:
        'Sed ornare, enim a venenatis sollicitudin, neque massa tristique tellus, nec blandit justo odio eu urna. Sed in.'
    },
    {
      Title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut porttitor libero?'
    },
    {
      Title:
        'Cras eget mauris tincidunt, euismod ipsum nec, rhoncus velit. Nullam posuere justo nulla, quis aliquam massa finibus vel?'
    },
    {
      Title:
        'Aenean quis tincidunt elit, quis rutrum odio. Fusce blandit quam at est faucibus, et ornare urna egestas.'
    },
    {
      Title:
        'In arcu enim, vehicula non velit a, commodo sollicitudin nisi. Maecenas eros mauris, ultrices sed nibh eget bibendum?'
    },
    {
      Title:
        'Sed ornare, enim a venenatis sollicitudin, neque massa tristique tellus, nec blandit justo odio eu urna. Sed in.'
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    ut porttitor libero. Etiam pellentesque tempor sodales.
                    Integer ac tincidunt eros. Cras rhoncus, nisi non euismod
                    volutpat, orci quam eleifend diam, ac porta odio sem et
                    lectus. Vivamus metus eros, ultrices nec nulla vitae, mollis
                    sagittis magna. Cras turpis magna, consequat dictum
                    ultricies et, luctus ac elit. Ut enim tellus, rutrum vitae
                    massa sit amet, rutrum fermentum nibh. Cras eget mauris
                    tincidunt, euismod ipsum nec, rhoncus velit. Nullam posuere
                    justo nulla, quis aliquam massa finibus vel. Maecenas
                    volutpat odio ac dolor lacinia auctor. Proin dictum, tellus
                    nec ultrices bibendum, sapien purus eleifend urna, quis
                    euismod neque nisi tempus ligula. In hac habitasse platea
                    dictumst. Vivamus at ornare mi. Phasellus sollicitudin
                    ultrices porta. In consequat mauris a sem molestie, vel
                    luctus nisi euismod.
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
