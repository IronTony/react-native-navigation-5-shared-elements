import React from 'react';
import {FlatList, Image, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import styles from './styles';

const DATA = [
  {
    id: '1',
    title: 'Iron Man',
    image:
      'https://images.everyeye.it/img-articoli/iron-man-2-recensione-continua-saga-iron-man-nell-mcu-recensione-v4-11400-1280x16.jpg',
    content:
      'Loremipsumdolorsitamet,consecteturadipiscingelit.Maecenasegetcursuspurus,aaliquetsem.Sedquisaliquamurna.Crassitametsemnonmifinibushendrerit.Duislaoreetmetusetleosemperdignissim.Curabiturluctusnibhinsemefficiturgravida.Sednequesem,dapibusvitaefeliseget,tempusporttitormi.Crasnequemassa,temporidenimvel,ultricescommodojusto.Maurisleoaugue,posuereidvariusin,vehiculaetlectus.Quisqueinerosvelodiosollicitudindapibus.Aliquamsagittis,nequeneccursusporta,justoorcilaoreetlibero,idaliquetnunctortoracrisus.Sedblanditnibhlobortis,laoreetjustonon,iaculisturpis.Nuncnonelementumurna.Praesentconvallisatmiacconsectetur.Phaselluspellentesquejustoacnisicursusrhoncus.Sedsedliberoaleopulvinartempus.Aliquameratvolutpat.Pellentesquehabitantmorbitristiquesenectusetnetusetmalesuadafamesacturpisegestas.Vestibulumvelitante,imperdietacmolestiesitamet,facilisisidmauris.Nullamnonjustojusto.Inmollisfelisegetaccumsanaliquet.Aliquamcursusegetarcuquisvarius.Nullamfermentummollislectusaluctus.Vestibulumanteipsumprimisinfaucibusorciluctusetultricesposuerecubiliacurae;Nullamvolutpattortoraugue,utsuscipitipsumsagittisa.Donecsemperviverrasuscipit.Inrisuselit,elementumalacussitamet,volutpatmolliseros.Sedsemperfelissitametodiotincidunt,sedmolestieelitfacilisis.Donectemportincidunttellus,utgravidanullahendreritac.',
  },
  {
    id: '2',
    title: 'Captain America',
    image:
      'https://i.pinimg.com/474x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg',
    content:
      'Loremipsumdolorsitamet,consecteturadipiscingelit.Maecenasegetcursuspurus,aaliquetsem.Sedquisaliquamurna.Crassitametsemnonmifinibushendrerit.Duislaoreetmetusetleosemperdignissim.Curabiturluctusnibhinsemefficiturgravida.Sednequesem,dapibusvitaefeliseget,tempusporttitormi.Crasnequemassa,temporidenimvel,ultricescommodojusto.Maurisleoaugue,posuereidvariusin,vehiculaetlectus.Quisqueinerosvelodiosollicitudindapibus.Aliquamsagittis,nequeneccursusporta,justoorcilaoreetlibero,idaliquetnunctortoracrisus.Sedblanditnibhlobortis,laoreetjustonon,iaculisturpis.Nuncnonelementumurna.Praesentconvallisatmiacconsectetur.Phaselluspellentesquejustoacnisicursusrhoncus.Sedsedliberoaleopulvinartempus.Aliquameratvolutpat.Pellentesquehabitantmorbitristiquesenectusetnetusetmalesuadafamesacturpisegestas.Vestibulumvelitante,imperdietacmolestiesitamet,facilisisidmauris.Nullamnonjustojusto.Inmollisfelisegetaccumsanaliquet.Aliquamcursusegetarcuquisvarius.Nullamfermentummollislectusaluctus.Vestibulumanteipsumprimisinfaucibusorciluctusetultricesposuerecubiliacurae;Nullamvolutpattortoraugue,utsuscipitipsumsagittisa.Donecsemperviverrasuscipit.Inrisuselit,elementumalacussitamet,volutpatmolliseros.Sedsemperfelissitametodiotincidunt,sedmolestieelitfacilisis.Donectemportincidunttellus,utgravidanullahendreritac.',
  },
  {
    id: '3',
    title: 'Thor',
    image:
      'https://i.pinimg.com/474x/fc/bf/2b/fcbf2bbb4906f3eabcb51498c8e823ff--iphone-wallpaper-freebies.jpg',
    content:
      'Loremipsumdolorsitamet,consecteturadipiscingelit.Maecenasegetcursuspurus,aaliquetsem.Sedquisaliquamurna.Crassitametsemnonmifinibushendrerit.Duislaoreetmetusetleosemperdignissim.Curabiturluctusnibhinsemefficiturgravida.Sednequesem,dapibusvitaefeliseget,tempusporttitormi.Crasnequemassa,temporidenimvel,ultricescommodojusto.Maurisleoaugue,posuereidvariusin,vehiculaetlectus.Quisqueinerosvelodiosollicitudindapibus.Aliquamsagittis,nequeneccursusporta,justoorcilaoreetlibero,idaliquetnunctortoracrisus.Sedblanditnibhlobortis,laoreetjustonon,iaculisturpis.Nuncnonelementumurna.Praesentconvallisatmiacconsectetur.Phaselluspellentesquejustoacnisicursusrhoncus.Sedsedliberoaleopulvinartempus.Aliquameratvolutpat.Pellentesquehabitantmorbitristiquesenectusetnetusetmalesuadafamesacturpisegestas.Vestibulumvelitante,imperdietacmolestiesitamet,facilisisidmauris.Nullamnonjustojusto.Inmollisfelisegetaccumsanaliquet.Aliquamcursusegetarcuquisvarius.Nullamfermentummollislectusaluctus.Vestibulumanteipsumprimisinfaucibusorciluctusetultricesposuerecubiliacurae;Nullamvolutpattortoraugue,utsuscipitipsumsagittisa.Donecsemperviverrasuscipit.Inrisuselit,elementumalacussitamet,volutpatmolliseros.Sedsemperfelissitametodiotincidunt,sedmolestieelitfacilisis.Donectemportincidunttellus,utgravidanullahendreritac.',
  },
];

const Card = ({item}, navigate) => {
  return (
    <TouchableOpacity onPress={() => navigate('SinglePost', {item})}>
      <SharedElement id={`${item.id}.image`}>
        <Image
          source={{uri: item.image}}
          style={styles.imageContainer}
          resizeMode="cover"
        />
      </SharedElement>
    </TouchableOpacity>
  );
};

const AnotherPage = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.padding}>
        <FlatList
          data={DATA}
          renderItem={({item}) => Card({item}, navigate)}
          style={styles.fullWidth}
        />
      </View>
    </SafeAreaView>
  );
};

export default AnotherPage;
