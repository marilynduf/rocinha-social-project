<template>

  <div>

    <div @click="$emit('close')">
      <router-link to="/">
        <div class="logo-ajira">Ajira</div>
      </router-link>
    </div>

    <div class="idee">

      <h3 class="idee__h3">Que veut dire ce mot, AJIRA?</h3>
      <p class="idee__text">
        Ajira est un acronyme pour : Action, jeunes, intervention, réseau, arts..
        Dit autrement ;
        Des actions faites par et pour des jeunes, des interventions transformatrices réfléchies avec eux, un réseau
        élargi de groupes et institutions mais aussi de pays intéressés par cette expérience et enfin, l’art et la
        créativité au service des interventions et des transformations désirées des espaces de marginalisation
      </p>


      <h3 class="idee__h3">Qu’est-ce que AJIRA?</h3>
      <p class="idee__text">
        Essentiellement un réseau de chercheurs et d’organismes structuré de manière souple, collaborative et oeuvrant
        avec des jeunes de quartiers marginalisés. Ce réseau est parti du Québec (Canada) et s’est étendu au Brésil, à
        la France et à Haïti. Les personnes qui animent ce réseau sont des universitaires qui oeuvrent depuis des années
        avec des groupes marginalisés et dans des contextes ou des jeunes subissent de fortes discriminations liées au
        fait d’être pauvre et de faire partie d’une minorité ethnique ou religieuse ou de tout autre groupe minorisé.
        Leurs milieux de vie, éloignés des grands centres urbains, sont particulièrement pointés du doigt car perçus
        comme des sources de violence et de criminalité. Les personnes qui soutiennent AJIRA depuis le début de
        l’initiative sont Francine Saillant, directrice du projet (Centre de recherche Cultures, arts, sociétés,
        Université Laval, Québec, Canada), Lygia Segala (Universidade federal fluminense, Brésil), Alain Bertho (Maison
        sciences de l’homme, France), Lorraine Mangones (Fondation connaissance et liberté, Haïti). Ces personnes sont
        aussi liées à des organisations de la société civile qui sont partie prenante de ce projet notamment le Réseau
        des Carrefours Jeunesse-Emploi du Québec (RCJEQ) (Rudy Humbert), le Museu Sankofa (Brésil) (Antonio Carlos
        Firmino) les Enfants de l’avenir (France) (Amar Henni) et Fokal (Haïti) (Lorraine Mangones). Le Conseil de
        recherches en sciences humaines du Canada, le Vice-Rectorat à la recherche et à la création de l’Université
        Laval, ainsi que la Maison des sciences de l’Homme Paris-Nord soutiennent financièrement le développement de ce
        projet. L’initiative pilote présentée sur ce site est la première étape d’un projet dont nous espérons qu’il
        puisse se poursuivre en 2019-2021. Bien que des terrains aient été effectués dans chacun de ces pays, n’est ici
        présenté que l’expérience brésilienne, à titre d’exemple. Le titre officiel de ce projet est : Pratiques et
        narrations des jeunes de réseaux urbains marginalisés.
      </p>

      <h3 class="idee__h3">Pourquoi AJIRA a-t-il été mis sur pied ?</h3>
      <p class="idee__text">
        AJIRA comme réseau est préoccupé de la situation des jeunes dans le monde, en particulier de celle d’une
        jeunesse marquée par l’expérience cumulée de la discrimination fondée sur l’âge et sur le fait de facteurs tels
        que le genre, la couleur de la peau, ou encore la culture religieuse, et aussi de celui d’habiter la marge des
        grandes villes que nous appelons ici périphéries.</p>
      <p class="idee__text">
        AJIRA comme réseau est préoccupé de la situation des jeunes dans le monde, en particulier de celle d’une
        jeunesse marquée par l’expérience cumulée de la discrimination fondée sur l’âge et sur le fait de facteurs tels
        que le genre, la couleur de la peau, ou encore la culture religieuse, et aussi de celui d’habiter la marge des
        grandes villes que nous appelons ici périphéries.</p>
      <p class="idee__text">Certaines données internationales préoccupent AJIRA.</p>

      <h3 class="idee__h3">Selon TUAC CANADA : Chômage des jeunes dans le monde</h3>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">7,1 milliards → Population totale du monde en 2013
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">17 % → Proportion de la population mondiale que
          représentent les jeunes
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">1,2 milliard → Nombre total de jeunes dans le monde
          dont l’âge va de 15 à 24 ans
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">87 % → Proportion de jeunes du monde entier qui
          vivent dans des pays en voie de développement
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">40 % → Proportion du nombre total de chômeuses et
          chômeurs que les jeunes occupent dans le monde
        </li>
        <li class="idee__text idee__text--stats idee__stats-items"> 4,5 % → Taux de chômage chez les adultes à l’échelle
          mondiale en 2012
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">12,6 % → Taux de chômage chez les jeunes à l’échelle
          mondiale en 2012
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">(TUAC Canada)</li>
      </ol>

      <h3 class="idee__h3">De plus</h3>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">21,4 % dans l’Union européenne</li>
        <li class="idee__text idee__text--stats idee__stats-items">17,6 % dans le centre et le sud-est de l’Europe</li>
        <li class="idee__text idee__text--stats idee__stats-items">9,0 % en Asie de l’Est</li>
        <li class="idee__text idee__text--stats idee__stats-items">13,5 % en Asie du Sud-Est et dans le Pacifique</li>
        <li class="idee__text idee__text--stats idee__stats-items">9,8 % en Asie du Sud</li>
        <li class="idee__text idee__text--stats idee__stats-items">14,3 % en Amérique latine</li>
        <li class="idee__text idee__text--stats idee__stats-items">26,5 % au Moyen-Orient</li>
        <li class="idee__text idee__text--stats idee__stats-items">27,9 % en Afrique du Nord</li>
        <li class="idee__text idee__text--stats idee__stats-items">11,5 % en Afrique subsaharienne</li>
      </ol>

      <h3 class="idee__h3">Jeunes et sous-emploi</h3>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">1,52 milliard → Estimation du nombre de gens qui
          étaient dans une situation d’emploi précaire en 2011
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">536 millions → Nombre de jeunes au travail dont la
          situation tenait du sous-emploi dans les pays en voie de développement en 2012
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">32 % → Proportion de jeunes travailleuses et
          travailleurs qui étaient à contrat temporaire en 2011
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">* Au même moment, il n’en était ainsi que pour 8,9 %
          des adultes.
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">42,1 % → Proportion de jeunes des 27 pays membres de
          l’Union européenne qui avaient un emploi temporaire en 2010
        </li>
      </ol>

      <h3 class="idee__h3">Au Canada</h3>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">14,3 % → Taux de chômage chez les jeunes ayant de 15
          à 24 ans en 2012
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">* À ce moment-là, ce chiffre n’était que de 6 % chez
          les membres de la population active qui avaient de 25 à 54 ans ou dont l’âge allait au-delà de 54 ans.
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">13 % → Proportion totale de jeunes ayant de 15 à 29
          ans qui ne sont pas aux études, n’ont pas d’emploi et ne suivent pas de formation non plus (ce que, par
          abréviation, on désigne en employant le terme PEEF)
        </li>
      </ol>

      <h3 class="idee__h3">Selon Statistiques Canada</h3>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">1 sur 4 → Proportion de jeunes ayant un diplôme
          d’études universitaires qui n’avaient qu’un emploi peu spécialisé en 2012
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">1 sur 5 → Proportion de jeunes ayant de 15 à 24 ans
          qui, actuellement, n’ont pas d’emploi et n’en ont jamais eu
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Statistique Canada ayant pour titre La dynamique du
          chômage chez les jeunes Canadiens
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Le chômage chez les jeunes affecte tant les pays
          développés que les pays en voie de développement. Dans chacun de ceux-ci, le gouvernement devrait faire de la
          création d’emplois pour les jeunes une priorité nationale.
        </li>
      </ol>

      <h3 class="idee__h3">Selon la Banque Mondiale</h3>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">Un tiers des 1,8 milliard de jeunes dans le monde n’a
          actuellement pas d’emploi et ne suit ni études ni formation. Sur le milliard de jeunes supplémentaires qui
          vont arriver sur le marché du travail au cours des dix prochaines années, seuls 40 pour cent devraient pouvoir
          trouver un emploi qui existe aujourd’hui.
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Les jeunes représentent 40 pour cent de la population
          mondiale
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Statistique Canada ayant pour titre La dynamique du
          chômage chez les jeunes Canadiens
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">la génération de jeunes la plus nombreuse de toute
          l’histoire
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">mais ils sont touchés de manière disproportionnée par
          le chômage
        </li>
      </ol>

      <h3 class="idee__h3">Selon l’Unesco</h3>

      <li class="idee__text">Le groupe des jeunes sans éducation, sans emploi ou formation, appelé “NEET”, représente
        souvent au moins 10 % des jeunes individus, et est en grande partie composé de jeunes avec un bas niveau
        d’éducation dans les pays développés
      </li>
      <li class="idee__text">Pour le Secrétariat aux droits humains des Nations Unies, ce fait d’être privé d’emploi ou
        d’emploi de qualité est une forme de discrimination et d’atteinte aux droits humains parce que cette forme de
        discrimination se manifeste sur ce groupe du seul fait de l’âge de ces personnes. Bien sûr d’autres facteurs
        peuvent être aggravants (niveau socio-économique, appartenance à une minorité ethnoculturelle ou à un groupe
        minorisé; le facteur âge reste un déterminant central.
      </li>

      <h3 class="idee__h3">Quels sont les objectifs de AJIRA?</h3>
      <li class="idee__text">Dans la phase 1 du projet, plusieurs objectifs étaient poursuivis et concernaient d’abord
        deux milieux (le Brésil et le Québec); les deux autres sites (France, Haïti) se sont joints en ajoutés en cours
        de route.
      </li>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">1-Faire l’état de la question sur la situation
          objective de jeunes de deux quartiers urbains marginalisés de deux villes, soit Rio de Janeiro (Rocinha) au
          Brésil et Montréal (Parc Extension) au Canada;
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">2-Faire le portrait détaillé des organismes de
          soutien de ces jeunes au sein de la société civile en particulier les organisations de droits et les
          organisations de jeunesse;
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">3-Cerner et analyser l’expérience concrète de ces
          jeunes dans chaque ville et quartier retenu en ce qui concerne l’exclusion et la participation sociale en
          prenant pour ancrage la narration de l’espace vécu;
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">4-Comprendre l’expérience de ces jeunes dans chaque
          ville et quartier retenu depuis des pratiques et des narrations alternatives de l’espace vécu;
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">5-Comparer de façon systématique ces portraits et
          expériences des deux quartiers ciblés;
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">6-Développer une méthodologie innovante et
          multidimensionnelle de l’étude de l’espace urbain marginal vécu comme façon d’accéder aux demandes implicites
          de droits et de citoyenneté. Au terme de ce projet, une nouvelle proposition, de plus large portée, sera
          soumise au CRSH et inclura d’autres espaces urbains.
        </li>
      </ol>
      <li class="idee__text">D’autres objectifs seront poursuivis lors d’une deuxième phase que nous souhaitons
        développer à partir de 2019.
      </li>


      <h3 class="idee__h3">Méthodologie</h3>

      <p class="idee__text">Sur chaque terrain des expérimentations ont été conduites lesquelles se résument ainsi; une
        quinzaine de jeunes ont été rencontrés de même que des intervenants et des responsables d’organismes associatifs
        ou ONG et groupes communautaires.
        Les jeunes furent sélectionnés en raison de leur engagement dans des projets qu’ils initient ou auxquels ils ont
        été invités par des intervenants. Ils nous ont été indiqués par nos partenaires. Ils étaient âgés de 18 à 30
        ans. Les activités suivantes ont été conduites sur chaque terrain et modulées en intensité selon les
        contextes.</p>

      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items"><span style="font-weight:600;margin-bottom: 2rem;">Entrevues marchées</span><br>Il
          s’agit de visiter les quartiers avec les jeunes, individuellement ou en petits groupes, de les visiter à
          travers leurs yeux ; les jeunes prennent les photos des lieux, les commentent, on s’arrête aux lieux qui
          comptent, on tente de comprendre le territoire de leur point de vue. La marche est aussi documentée par la
          photographie. Les propos sont enregistrés en audio.
        </li>
        <li class="idee__text idee__text--stats idee__stats-items"><span style="font-weight:600;margin-bottom: 2rem;">Entrevues individuelles</span><br>Elles
          sont conduites auprès de jeunes qui ont fait l’entrevue marchée et qui acceptent de nous rencontrer une
          deuxième fois. Elles sont aussi conduites auprès d’intervenants d’organismes auxquels participent ces jeunes.
        </li>

        <li class="idee__text idee__text--stats idee__stats-items"><span style="font-weight:600;margin-bottom: 2rem;">Entrevues collectives lors d’ateliers</span><br>Dans
          chaque milieu des entrevues collectives avec les jeunes et suivant les entrevues marchées ont été faites leur
          permettant d’approfondir leurs points de vue sur l’expérience de leur quartier et leur vie quotidienne.
        </li>

        <li class="idee__text idee__text--stats idee__stats-items"><span style="font-weight:600;margin-bottom: 2rem;">Ateliers artistiques</span><br>Dans
          chaque milieu des ateliers artistiques ont permis aux jeunes d’exprimer par le dessin et par l’écriture leurs
          manières de percevoir leur quartier. Les dessins ont été conservés. A chaque fois ils furent commentés.
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">À cette méthodologie générale s’est ajoutée celle de
          la cartographie participative, expérience faite à Haïti et au Brésil
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Enfin, une expérience un peu plus approfondie
          d’ateliers d’écriture s’est ajoutée sur le site français
        </li>

      </ol>


      <h3 class="idee__h3">Autour des terrains et des constats</h3>
      <li class="idee__text"><span style="font-weight:600;margin-bottom: 2rem;">Un langage presque commun autour  DE LA JUSTICE. Les jeunes sur tous les sites souhaitent: </span>
      </li>

      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">Être vu autrement</li>
        <li class="idee__text idee__text--stats idee__stats-items">Avoir droit à un environnement sécuritaire pour eux,
          elles
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Avoir droit à des services publics de qualité</li>
        <li class="idee__text idee__text--stats idee__stats-items">Avoir droit à la culture</li>
        <li class="idee__text idee__text--stats idee__stats-items">Avoir droit à l’éducation</li>
        <li class="idee__text idee__text--stats idee__stats-items">Avoir droit au regard positif des pairs et de la
          société
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Se déprendre du regard des médias hégémoniques</li>
        <li class="idee__text idee__text--stats idee__stats-items">Avoir des opportunités de vie: travail, création,
          amour
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Avoir droit à la beauté, à la sérénité</li>
        <li class="idee__text idee__text--stats idee__stats-items">Ne plus avoir honte</li>
        <li class="idee__text idee__text--stats idee__stats-items">Être reconnu</li>
        <li class="idee__text idee__text--stats idee__stats-items">Pouvoir faire connaître leurs initiatives</li>
        <li class="idee__text idee__text--stats idee__stats-items">Pouvoir faire en sorte que le regard des créateurs de
          ces milieux informe plus qu’il ne déforme l’objectivité des réalités du milieu
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Des outils et de la formation</li>
        <li class="idee__text idee__text--stats idee__stats-items">Se débarrasser du sentiment d’être abandonné par les
          pouvoirs publics
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Partager, connaître, connaître les autres, incluant
          les participants d’autres pays
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Créer, innover, savoir</li>
        <li class="idee__text idee__text--stats idee__stats-items">Un État plus compétent, moins violent</li>
        <li class="idee__text idee__text--stats idee__stats-items">Se défaire du profilage racial et social</li>
      </ol>

      <h3 class="idee__h3">Difficultés communes des terrains</h3>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">Territoire larges, peu connectés, mal desservis en
          transports publics
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Peu de places publiques sinon absence dans certains
          des quartiers concernés
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Longues distances ou temps de transport énorme pour
          se rendre sur les lieux
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Enjeux de sécurité pour les jeunes et la population
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Accommodations limitées sur place</li>
        <li class="idee__text idee__text--stats idee__stats-items">Une violence qui va de larvaire à accusée</li>
        <li class="idee__text idee__text--stats idee__stats-items">Les organisations sur place, sauf exception, sont peu
          équipées en matériel de toute sorte et en salles parfaitement convenables, la France faisant exception
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Pour beaucoup il s’agit de petites organisations qui
          sont toutefois localement réseautées
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Capacité de participation des jeunes variable en
          raison des besoins économiques qui passent avant la participation à des projets ou organisations
        </li>
      </ol>

      <h3 class="idee__h3">Quels ont été à ce jour les réalisations de AJIRA ?</h3>
      <ol class="idee__stats">
        <li class="idee__text idee__text--stats idee__stats-items">Quatre terrains dans quatre pays et formalisation du
          réseau AJIRA
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Collecte d’une quarantaine d’entrevues individuelles
          et de 11 entrevues de groupe
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Un corpus d’environ 1000 photos des quartiers dont
          une soixantaine sont celles de jeunes
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Une collection d’une cinquantaine de dessins
          commentés des quatre quartiers élaborés par les jeunes
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Une documentation élargie sur les quatre milieux</li>
        <li class="idee__text idee__text--stats idee__stats-items">Ce site web (en élaboration)</li>
        <li class="idee__text idee__text--stats idee__stats-items">Une école d’été virtuelle internationale en juin
          2017
        </li>
        <li class="idee__text idee__text--stats idee__stats-items">Un séminaire en avril 2018</li>
      </ol>

    </div>

  </div>

</template>
