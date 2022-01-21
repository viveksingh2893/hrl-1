import React from 'react';
import {
  Document,
  Font,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import List, { Item } from './List';
Font.register({
    family: 'Lato Bold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
  });
Font.register({
    family: 'Lato',
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
  });
  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Lato Bold',
      fontSize: 11,
      marginBottom: 10,
    },
    skills: {
      fontFamily: 'Lato',
      fontSize: 10,
      marginBottom: 10,
    },
    page: {
        padding: 50,
      },
      container: {
        flex: 1,
        flexDirection: 'column',
        '@media max-width: 400': {
          flexDirection: 'column',
        },
      },
      image: {
        marginBottom: 10,
      },
      itemContent: {
        flex: 1,
        fontSize: 10,
        fontFamily: 'Lato',
      },
  });
const Resume=({data})=>{
    console.log('resume')
    const EducationEntry = ({ name, skills }) => (
        <View>
          <Text style={styles.title}>{name}</Text>
          <List>
            {skills.map((skill, i) => (
              <Item key={i}>{skill.degree} from {skill.university} in Year {skill.year}.</Item>
            ))}
          </List>
        </View>
      );
      const PrePosEntry = ({ name, skills }) => (
        <View>
          <Text style={styles.title}>{name}</Text>
          <List>
            {skills.map((skill, i) => (
              <Item key={i}>{skill.designation} from {skill.start_year} to {skill.end_year}.</Item>
            ))}
          </List>
        </View>
      );
      const ProjectEntry = ({ name, skills }) => (
          
        <View>
          <Text style={styles.title}>{name}</Text>
          <List>
            {skills.map((skill, i) => (
                <View>
              <Item key={i}>{skill.title} in Year {skill.year} </Item>
              <Item data='hi' key={i}>{skill.description} </Item>
              </View>
            ))}            
          </List>
        </View>
      );
      const PatentPubEntry = ({ name, skills }) => (
        <View>
          <Text style={styles.title}>{name}</Text>
          <List>
            {skills.map((skill, i) => (
              <Item key={i}>{skill.description} in Year {skill.year}.</Item>
            ))}
          </List>
        </View>
      );
    return(
        <Document>
    <Page size="A4" style={{...styles.page}} wrap>
    <View style={{...styles.container}}>
        <View style={{display:'flex',flexDirection:'row'}}>
            <View><Image style={{...styles.image,width:'100px',height:'100px'}}src={data.image}/></View>
            <View style={{display:'flex',flexDirection:'column',padding:'10px'}}>
            <Text>Name : {data.name} </Text>
            <Text>Designation : {data.designation}</Text>
            <Text>Email : {data.email}</Text>
            <Text>Phone : {data.contact}</Text>
            </View></View>
            <View style={{display:'flex',flexDirection:'column'}}>
                <View><Text style={styles.title}>Bio Sketch</Text><List><Item>{data.bio_sketch}</Item></List></View>
                <View><Text style={styles.title}>Current Position</Text><List><Item>{data.current_position}</Item></List></View>
                <EducationEntry
      name="Education"
      skills={data.education}
    />
            <PrePosEntry name="Previous Positions"
      skills={data.preposition}/>
      <ProjectEntry name="Projects"
      skills={data.project}/>
      <PatentPubEntry name="Patents"
      skills={data.patent}/>
      <PatentPubEntry name="Publications"
      skills={data.publication}/>
            </View>
        
    </View>
    </Page>
    </Document>
    )
}
export default Resume;