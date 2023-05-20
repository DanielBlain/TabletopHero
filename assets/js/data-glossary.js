var glossary = new Vue({
  el: '#glossary',
  data: {
    entries: [
      {
        id: 'achiever', name: 'achiever',
        description: `
        One of the four player types that results when the implicit/explicit
        axis of Richard Bartle's 3D Player Types model is collapsed. (See the
        document
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        by Richard Bartle.) Achievers are in the World/Active quadrant, and
        therefore feel most rewarded when their accomplishments are validated
        within the structure and rules of the game universe itself. In other
        words, they prefer to win games in the most traditional sense of the
        word &quot;win&quot;. Compare to <u>explorer</u>, <u>killer</u>, and
        <u>socializer</u>.
        `
      },
      {
        id: 'bartle-ladder', name: 'Bartle Ladder, the',
        description: `
        Bartle Ladder, the</a> - My own term for the roughly ladder-like
        structure that results when the most common paths followed by players
        are overlapped onto Richard Bartle's 3D Player Types model. (See the
        article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        by Richard Bartle.)
        <img src='./assets/images/DevelopmentTracks.gif' title='DevelopmentTracks.gif' />
        `
      },
      {
        id: 'bartle-path', name: 'Bartle Path, the',
        description: `
        My term for the four-point path that results when the most common paths
        followed by players are overlapped onto Richard Bartle's 3D Player Types
        model, as for the
        <a class='wiki_link' href='#bartle-ladder'>
          Bartle Ladder
        </a>
        , and then the model is collapsed along the Players/World axis. (See the
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        by Richard Bartle.) Descriptions of each of the terms &quot;
        <a class='wiki_link' href='#seeker'>
          seeker
        </a>
        &quot;, &quot;
        <a class='wiki_link' href='#learner'>
          learner
        </a>
        &quot;, &quot;
        <a class='wiki_link' href='#doer'>
          doer
        </a>
        &quot;, and &quot;
        <a class='wiki_link' href='#master'>
          master
        </a>
        &quot; are found elsewhere in this Glossary.html.
        <img src='./assets/images/BartlePath_Linear.gif' alt='BartlePath_Linear.gif' title='BartlePath_Linear.gif' />
        `
      },
      {
        id: 'big-model', name: 'Big Model, the',
        description: `
        Built by Ron Edwards, the Big Model suggests that the layers of a
        particular instance of a role playing game are rather like an onion, with
        each layer being encapsulated within another. The four recognized layers
        are:
        <a class='wiki_link' href='#social-contract'>
          Social Contract
        </a>
        (outermost),
        <a class='wiki_link' href='#exploration'>
          Exploration
        </a>
        ,
        <a class='wiki_link' href='#technique'>
          Techniques
        </a>
        , and
        <a class='wiki_link' href='#ephemera'>
          Ephemera
        </a>
        (innermost). The model also recognizes three modes of play, called
        <a class='wiki_link' href='#creative-agenda'>
          Creative Agendas
        </a>
        , which are:
        <a class='wiki_link' href='#gamism'>
          Gamism
        </a>
        ,
        <a class='wiki_link' href='#narrativism'>
          Narrativism
        </a>
        ,
        <a class='wiki_link' href='#simulationism'>
          Simulationism
        </a>
        . The four layers are treated as the medium, while the Creative Agenda is
        the ultimate point of playing, that the players want to express using that
        medium. I believe the example given on
        <a class='wiki_link_ext' href='http://www.indie-rpgs.com/'>
          The Forge
        </a>
        is of a painter, though I can no longer find it. The choice of what the
        subject should be for the painting is the painter's Creative Agenda. The
        colours and brushes and canvas he chooses are his medium. Some choices of
        medium are better than others for expressing any given subject.
        <img src='./assets/images/700px-The_Big_Model.svg.png' alt='700px-The_Big_Model_svg.png' title='700px-The_Big_Model_svg.png' />
        Also see
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/The_Big_Model'>
          http://en.wikipedia.org/wiki/The_Big_Model
        </a>
        `
      },
      {
        id: 'combat-wheel', name: 'Combat Wheel, the',
        description: `
        See the entry for
        <a class='wiki_link' href='#normal-device'>
          Normal Device
        </a>
        .
        `
      },
      {
        id: 'creative-agenda', name: 'creative agenda',
        description: `
        The aesthetic priorities and any matters of imaginative interest regarding
        role-playing. Three distinct Creative Agendas are currently recognized:
        <a class='wiki_link_ext' href='http://www.indie-rpgs.com/articles/21/'>
          Step On Up
        </a>
        (
        <a class='wiki_link' href='#gamism'>
          Gamist
        </a>
        ),
        <a class='wiki_link_ext' href='http://www.indie-rpgs.com/articles/15/'>
          The Right to Dream
        </a>
        (
        <a class='wiki_link' href='#simulationism'>
          Simulationist
        </a>
        ), and
        <a class='wiki_link_ext' href='http://www.indie-rpgs.com/_articles/narr_essay.html'>
          Story Now
        </a>
        (
        <a class='wiki_link' href='http://normalproject.wikispaces.com/Gl#narrativism'>
          Narrativist
        </a>
        ). &lt;...&gt; Creative Agenda is expressed using all Components of
        <a class='wiki_link' href='#exploration'>
          Exploration
        </a>
        , but most especially
        <a class='wiki_link' href='#system'>
          System
        </a>
        .
        `
      },
      {
        id: 'doer', name: 'doer',
        description: `
        From
        <a class='wiki_link' href='#bartle-path'>
          the Bartle Path
        </a>
        , the category of players called &quot;doers&quot; describes those have
        discovered what skills are needed to play (or at least, those skills
        needed to play in a particular way that they want) and are good at using
        those skills. They are described as having conscious competence in those
        skills, per the article
        <a class='wiki_link_ext' href='http://www.businessballs.com/consciouscompetencelearningmodel.htm'>
          http://www.businessballs.com/consciouscompetencelearningmodel.htm
        </a>
        .
        `
      },
      {
        id: 'ephemera', name: 'ephemera',
        description: `
        The moment-to-moment events that take place during a roleplaying game;
        e.g. the dice rolled, tables checked, and sentences spoken. Any given
        <a class='wiki_link' href='#technique'>
          technique
        </a>
        consists of a string of one or more ephemera.
        `
      },
      {
        id: 'epic-simulationism', name: 'epic simulationism',
        description: `
        See
        <a class='wiki_link' href='#epic-simulationism'>
          simulationism, epic
        </a>
        `
      },
      {
        id: 'exploration', name: 'exploration',
        description: `
        Distinct from the player type
        <a class='wiki_link' href='#explorer'>
          &quot;explorer&quot;
        </a>
        , all participation in role playing games ultimately involves a certain
        amount of exploration, usually of the
        <a class='wiki_link' href='#shared-imagined-space'>
          shared imagined space
        </a>
        . (The
        <a class='wiki_link' href='#system'>
          system
        </a>
        can also be explored.) It is collectively created and shared among the
        players and
        <a class='wiki_link' href='#game-master'>
          game master
        </a>
        . It comprises the meat of what people typically mean when they talk about
        traditional role-playing. There is emphasis on the fact that the shared
        imagined space is created collectively, with input from all players.
        Without this layer, the activity might more aptly be called story-telling
        or fiction-building.
        `
      },
      {
        id: 'explorer', name: 'explorer',
        description: `
        Distinct from
        <a class='wiki_link' href='#exploration'>
          &quot;exploration&quot;
        </a>
        , the explorer is one of the four player types that results when the
        implicit/explicit axis of Richard Bartle's 3D Player Types model is
        collapsed. (See the
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        by Richard Bartle.) Explorers are in the World/Interactive quadrant, and
        therefore feel most rewarded when learning about and mastering the game
        universe, in the sense of becoming &quot;good at&quot; the game, even
        though the actual played character may not be powerful. Compare to
        <u>achiever</u>, <u>killer</u>, and <u>socializer</u>.
        `
      },
      {
        id: 'friend', name: 'friend',
        description: `
        As a player type, friends' avatars exist in the virtual or imagined
        world, but players who fall into this category focus more on interacting
        with the other players behind the avatars. On the 3D Player Types model
        presented in Richard Bartle's article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        , friends are in the Implicit, Players, Interacting octant.
        `
      },
      {
        id: 'fruitful-void', name: 'Fruitful Void, the',
        description: `
        A term originally coined by Vincent Baker of
        <a class='wiki_link_ext' href='http://www.lumpley.com'>
          http://www.lumpley.com
        </a>
        , the Fruitful Void is the collection of emergent attributes of a
        tabletop RPG. The Fruitful Void defines what a given tabletop game is
        &quot;about&quot; in the most meaningful sense. In a similar way,
        Shakespeare's &quot;Romeo and Juliet&quot; is involves two particular
        lovers and their quarrelling families but is about the turmoil felt by
        the lovers having to choose between each other and their senses of duty
        to their respective families. In a tabletop RPG, this Fruitful Void may
        not correlate with the game designers' intended experience depending on
        how well they build the game. For example, a game designer may base a
        game upon Romeo and Juliet with the intention of evoking the same
        emotional turmoil in the players (i.e. a
        <a class='wiki_link' href='#narrativism'>
          Narrativist
        </a>
        creative agenda, but if the Romeo character scores &quot;experience
        points&quot; for killing Capulets, it may result in a purely
        <a class='wiki_link' href='#gamism'>
          Gamist
        </a>
        game.
        `
      },
      {
        id: 'game-master', name: 'game master or GM',
        description: `
        The game master basically runs the physics of the shared-imagined
        universe and controls all the non-player characters. In many cases, the
        GM also acts as a game referee, deciding whether or not a PC's actions
        violated any
        <a class='wiki_link' href='#rules'>
          rules
        </a>
        .
        `
      },
      {
        id: 'game-mechanics', name: 'game mechanic',
        description: `
        <span class='glossary-borrowed'>
          An individual and specific feature of
          <a class='wiki_link' href='#system'>
            System
          </a>
          ; Mechanics in text form are
          <a class='wiki_link' href='#rules'>
            &quot;rules&quot;
          </a>
          .
        </span>
        `
      },
      {
        id: 'gamism', name: 'Gamism; a gamist',
        description: `
        Gamism is one of the three major modes of play (i.e.
        <a class='wiki_link' href='#creative-agenda'>
          Creative Agendas
        </a>
        ) recognized in the
        <a class='wiki_link' href='#big-model'>
          Big Model
        </a>
        . Although
        <a class='wiki_link' href='#immersion'>
          immersion
        </a>
        in the fantasy world is important, the primary focus of this mode is on
        the competition between real players of the game. A gamist is a player
        who prefers this mode of play, though the
        <a class='wiki-link-ext' href='#big-model'>
          Big Model
        </a>
        does not recognize the possibility that players may change types over
        time. See
        <a class='wiki_link_ext' href='http://www.indie-rpgs.com/articles/21/'>
          &quot;Gamism: Step On Up&quot;
        </a> by Ron Edwards.<br />
        `
      },
      {
        id: 'griefer', name: 'griefer',
        description: `
        A griefer is a player who acts on other players with no specific goals
        in mind beyond, usually, the intention usually to hurt or help. This is
        the beginning state of players who are new to the game but prefer to
        focus on the other participants in the game rather than the virtual or
        imagined world. On the 3D Player Types model presented in Richard
        Bartle's article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        , griefers are in the Implicit, Players, Acting octant.
        `
      },
      {
        id: 'hacker', name: 'hacker',
        description: `
        A hacker is a player who is more interested in experimenting with the
        boundaries and rules of the virtual or imagined game world than anything
        else. On the 3D Player Types model presented in Richard Bartle's article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        , hackers are in the Implicit, World, Interacting octant.
        `
      },
      {
        id: 'handling-time', name: 'handling time',
        description: `
        <span class='glossary-borrowed'>The real time required to process,
          calculate, and interpret a resolution
          <a class='wiki_link' href='./Glossary.html#technique'>
            Technique
          </a>
          once its procedures have been applied. See also
          <a class='wiki_link' href='./Glossary.html#search-time'>
            Search Time
          </a>
          .
        </span>
        `
      },
      {
        id: 'heros-journey', name: 'Hero\'s Journey, the',
        description: `
        The predictable pattern that most players will follow when they
        encounter a new fictional environment through an avatar. The pattern is:
        <a class='wiki_link' href='./Glossary.html#seeker'>
          Seeker
        </a>
        ,
        <a class='wiki_link' href='./Glossary.html#learner'>
          Learner
        </a>
        ,
        <a class='wiki_link' href='./Glossary.html#doer'>
          Doer
        </a>
        ,
        <a class='wiki_link' href='./Glossary.html#master'>
          Master
        </a>
        . See Richard Bartle's textbook
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Designing_Virtual_Worlds'>
          &quot;Designing Virtual Worlds&quot;
        </a>
        for more information. The term was originally coined by Joseph Campbell
        in his 1949 book
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/The_Hero_With_A_Thousand_Faces'>
          &quot;The Hero With A Thousand Faces&quot;
        </a>
        .
        `
      },
      {
        id: 'house-rules', name: 'house rules',
        description: `
        See
        <a class='wiki_link' href='./Glossary.html#rules'>
          rules
        </a>
        .
        `
      },
      {
        id: 'immersion', name: 'immersion',
        description: `
        From
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        by Richard Bartle: &quot;Immersion is the sense that a player has of
        being in a virtual world. It is related to the concept of presence –
        the illusion that a (computer-)mediated experience is not mediated
        [<a class='wiki_link' href='./Glossary.html#ref1'>
          Lombard97
        </a>
        ]. Immersion is also related to the psychological concept of flow –
        a deep involvement that transcends distractions and sense of time [
        <a class='wiki_link' href='./Glossary.html#ref2'>
          Csikszentmihalyi90
        </a>]
        .&quot;
        `
      },
      {
        id: 'incoherence', name: 'incoherence',
        description: `
        <span class='glossary-borrowed'>Play which includes incompatible
          combinations of Creative Agendas among participants. Incoherent
          play is considered to contribute to Dysfunctional play, but does
          not define it. Incoherence may be applied indirectly to game
          rules. Abashedness represents a minor, correctable form of
          Incoherence.
        </span>
        `
      },
      {
        id: 'killer', name: 'killer',
        description: `
        One of the four player types that results when the implicit/explicit
        axis of Richard Bartle's 3D Player Types model is collapsed. (See the
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        by Richard Bartle.) Killers are in the Player/Active quadrant, and
        therefore feel most rewarded by acting upon and eliciting a response
        from other players. Although the connotation of &quot;killer&quot; is
        negative, this player type includes those that enjoy teaching and aiding
        other players, for no other reason than the good feeling they get from
        doing so. It can also include, say, politicians, who enjoy exerting
        power over other people though not necessarily in a violent way. Compare
        to <u>achiever</u>, <u>explorer</u>, and <u>socializer</u>.
        `
      },
      {
        id: 'learner', name: 'learner',
        description: `
        From
        <a class='wiki_link' href='./Glossary.html#bartle%20path'>
          the Bartle Path
        </a>
        , a learner has become familiar with the game that they have chosen a
        &quot;career path&quot;. In many
        <a class='wiki_link' href='./Glossary.html#mud'>
          MUDs
        </a>
        , the players have the freedom to choose what skills they would like to
        learn, and at this stage, the player is aware he/she needs to learn
        them. The player is said to have conscious incompetence in the skills,
        as discussed in
        <a class='wiki_link_ext' href='http://www.businessballs.com/consciouscompetencelearningmodel.htm'>
          http://www.businessballs.com/consciouscompetencelearningmodel.htm
        </a>
        .
        `
      },
      {
        id: 'lumpley-principle', name: 'Lumpley Principle, the',
        description: `
        <span class='glossary-borrowed'>
          &quot;System (including but not limited to 'the rules') is defined as
          the means by which the group agrees to imagined events during play.
          &quot; The author of the principle is Vincent Baker, see Vincent's
          standard rant: power, credibility, and assent and Player power abuse.
        </span>
        `
      },
      {
        id: 'maker', name: 'maker',
        description: `
        From
        <a class='wiki_link' href='./Glossary.html#bartle%20path'>
          the Bartle Path
        </a>
        , players in this category have successfully gained a set of skills they
        can use to play the game in question, though they still need to actively
        concentrate in order to use them. Such players are said to have
        conscious competence in these skills, per the article
        <a class='wiki_link_ext' href='http://www.businessballs.com/consciouscompetencelearningmodel.htm'>
          http://www.businessballs.com/consciouscompetencelearningmodel.htm
        </a>
        .
        `
      },
      {
        id: 'master', name: 'master',
        description: `
        From
        <a class='wiki_link' href='./Glossary.html#bartle%20path'>
          the Bartle Path
        </a>
        , a player in the master category is so highly skilled at some set of
        methods of play that they come naturally now. Using these skills
        requires no conscious effort, and so the player is said to have
        unconscious competence in them, as discussed in
        <a class='wiki_link_ext' href='http://www.businessballs.com/consciouscompetencelearningmodel.htm'>
          http://www.businessballs.com/consciouscompetencelearningmodel.htm
        </a>
        .
        `
      },
      {
        id: 'mechanic', name: 'mechanic',
        description: `
        See
        <a class='wiki_link' href='./Glossary.html#mechanic'>
          &quot;game mechanic&quot;
        </a>
        .
        `
      },
      {
        id: 'mud', name: 'MUD or multi-user dungeon',
        description: `
        Alternatively, MOG (multiplayer online game), an online electronic game
        where multiple people can interact in a single online environment,
        usually for the purposes of playing a game (in which case, the people
        are called &quot;players&quot;) and usually with each person controlling
        a single avatar. The MUD acronym is an ancestor for the modern acronym
        MMORPG (massively-multiplayer online role playing game). Also see
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/MUD'>
          http://en.wikipedia.org/wiki/MUD
        </a>
        .
        `
      },
      {
        id: 'narrativism', name: 'Narrativism',
        description: `
        Narrativism is one of the three major modes of play (i.e.
        <a class='wiki_link' href='./Glossary.html#creative-agenda'>
          Creative Agendas
        </a>
        ) recognized in the
        <a class='wiki_link' href='./Glossary.html#big-model'>
          Big Model
        </a>
        . Although
        <a class='wiki_link' href='./Glossary.html#immersion'>
          immersion
        </a>
        in the fantasy world is important, the primary focus of this mode is on
        the resolution of the
        <a class='wiki_link' href='./Glossary.html#premise'>
          Premise
        </a>
        (where Premise is a loaded term here). See
        <a class='wiki_link_ext' href='http://www.indie-rpgs.com/_articles/narr_essay.html'>
          &quot;Narrativism: Story Now&quot;
        </a>
        by Ron Edwards.
        `
      },
      {
        id: 'networker', name: 'networker',
        description: `
        Networkers prefer to interact with people and enjoy engaging in social
        circles. On the 3D Player Types model presented in Richard Bartle's
        article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        , networkers are in the Explicit, Players, Interacting octant.
        `
      },
      {
        id: 'non-player-character', name: 'non-player character or NPC',
        description: `
        Virtually all non-player characters are background characters, though
        some play a significant role in the game. A non-player character is
        controlled by the game master (and, rarely, sometimes purely by
        <a class='wiki_link' href='./Glossary.html#mechanic'>
          game mechanics
        </a>
        ).
        `
      },
      {
        id: 'normal-device', name: 'Normal Device, the',
        description: `
        Also called the &quot;Combat Wheel&quot;, it is the central
        action-resolution
        <a class='wiki_link' href='./Glossary.html#mechanic'>
          mechanic
        </a>
        for the
        <a class='wiki_link' href='./Glossary.html#normal-project'>
          Normal Project
        </a>
        . Its workings shall remain a mystery for now. Note that although the
        Normal Device will be the central action-resolution mechanic, the
        ultimate game should have a few facets so that it may fill the niche for
        which the game is intended.
        `
      },
      {
        id: 'normal-project', name: 'Normal Project, the',
        description: `
        The project for which this entire Wiki is devoted. Visit home for more
        details. In brief, the goal of the Normal Project is to build an
        exciting
        <a class='wiki_link' href='./Glossary.html#roleplaying-game'>
          roleplaying game
        </a>
        that appeals to many peoples' tastes and which makes good use of the
        <a class='wiki_link' href='./Glossary.html#normal-device'>
          Normal Device
        </a>
        .
        `
      },
      {
        id: 'opportunist', name: 'opportunist',
        description: `
        Opportunists prefer to play with the virtual or imagined environment,
        but they have no particular goal in mind. This the state of players who
        prefer participating with the virtual or imagined world, but who are
        still new to it. On the 3D Player Types model presented in Richard
        Bartle's article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        , opportunists are in the Implicit, World, Acting octant.
        `
      },
      {
        id: 'planner', name: 'planner',
        description: `
        Planners are those players who enjoy using the skills they have learned
        and knowledge they have gained about the environment (virtual or
        imagined) to bring about their own desired results. On the 3D Player
        Types model presented in Richard Bartle's article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        , planners are in the Explicit, World, Acting octant.
        `
      },
      {
        id: 'player-character', name: 'player characte or PC',
        description: `
        A character in an RPG controlled by a player who is not the game master.
        `
      },
      {
        id: 'politician', name: 'politician',
        description: `
        Players who enjoy exerting the influence they have gained in the virtual
        or imagined environment on other players. On the 3D Player Types model
        presented in Richard Bartle's article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        , politicians are in the Explicit, Players, Acting octant. Though I
        haven't tested this claim, I expect this includes
        <a class='wiki_link' href='./Glossary.html#non-player-character'>
          non-player characters
        </a>
        in shared imagined worlds due to the fact that all
        <a class='wiki_link' href='./Glossary.html#non-player-character'>
          NPCs
        </a>
        in this scenario are still ultimately controlled by a human being,
        namely the
        <a class='wiki_link' href='./Glossary.html#game-master'>
          GM
        </a>
        . This is not true in virtual worlds.
        `
      },
      {
        id: 'premise', name: 'premise',
        description: `
        <span class='glossary-borrowed'>(adapted from
        <a class='wiki_link' href='./Glossary.html#ref3'>
          Egri[3]
        </a>
        ) A generalizable, problematic aspect of human interactions. Early in
        the process of creating or experiencing a story, a Premise is best
        understood as a proposition or perhaps an ideological challenge to the
        world represented by the protagonist's passions. Later in the process,
        resolving the conflicts of the story transforms Premise into a theme - a
        judgmental statement about how to act, behave, or believe. In
        role-playing, &quot;protagonist&quot; typically indicates a character
        mainly controlled by one person. A defining feature of
        <a class='wiki_link_ext' href='http://www.indie-rpgs.com/_articles/narr_essay.html'>
          Story Now
        </a>
        .</span>
        `
      },
      {
        id: 'reward', name: 'reward',
        description: `
        The word reward in its usual context refers strictly to the benefits and
        awards given to the PCs upon achieving some victory. Less often, it
        refers to the personal and social gratification experienced by a player
        due to events unfolding in the RPG. A given reward need not also be a
        reward for the character, nor need it even be within the
        <a class='wiki_link' href='./Glossary.html#shared-imagined-space'>
          shared imagined space
        </a>
        . An example of this could be the hideous painful death of a player's
        character, which the player finds entertaining for reasons of drama.
        Also see
        <a class='wiki_link' href='./Glossary.html#reward-cycle'>
          reward cycle
        </a>
        .
        `
      },
      {
        id: 'reward-cycle', name: 'reward cycle',
        description: `
        The reward cycle is the explicit or emergent cycle through which the PCs
        go to achieve &quot;rewards&quot;, in the sense of the personal and
        social gratification as experienced by the player. A single game need
        not have just one reward cycle. An emergent reward cycle may circumvent
        a game designer's intended reward cycle if the game is designed
        <a class='wiki_link' href='./Glossary.html#incoherence'>
          incoherently
        </a>
        .
        `
      },
      {
        id: 'roleplaying-game', name: 'roleplaying game or RPG',
        description: `
        The definition of what constitutes a roleplaying game is difficult to
        narrow down, but in essence it is a game consisting of the exploration
        of a
        <a class='wiki_link' href='./Glossary.html#shared-imagined-space'>
          shared imagined space
        </a>
        . Two good resources are the article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/hcds.htm'>
          &quot;Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs&quot;
        </a>
        by Mr. Richard Bartle and the
        <a class='wiki_link' href='./Glossary.html#big-model'>
          Big Model
        </a>
        , built with tremendous input from Ron Edwards. The former was written
        specifically about
        <a class='wiki_link' href='./Glossary.html#mud'>
          MUDs
        </a>
        , but the same arguments may apply to roleplaying games to some degree.
        `
      },
      {
        id: 'rules', name: 'rules',
        description: `
        Rules refers to the set of instructions given for any particular game or
        RPG. Such instructions may exclude subsets of the instructions given by
        the game designer(s) and/or include extra instructions created by a
        particular set of players. The aforementioned extra instructions are
        oftentimes called &quot;house rules&quot;.
        `
      },
      {
        id: 'scientist', name: 'scientist',
        description: `
        A type of player who, as the category name suggests, enjoys testing the
        rules and boundaries of a world (virtual, imagined, or otherwise). On
        the 3D Player Types model presented in Richard Bartle's article
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        , scientists are in the Explicit, World, Interacting octant.
        `
      },
      {
        id: 'screentime', name: 'screentime',
        description: `
        Screentime is the time spent by a PC in the
        <a class='wiki_link' href='./Glossary.html#spotlight'>
          spotlight
        </a>
        . In essence, it is the amount of time that all other players take a
        step back and allow a PC to perform actions.
        `
      },
      {
        id: 'search-time', name: 'search time',
        description: `
        <span class='glossary-borrowed'>The real time required to determine
        necessary values or information prior to applying a resolution
        <a class='wiki_link' href='./Glossary.html#technique'>
          Technique
        </a>
        . See also
        <a class='wiki_link' href='./Glossary.html#handling-time'>
          Handling Time
        </a>
        .</span>
        `
      },
      {
        id: 'seeker', name: 'seeker',
        description: `
        From
        <a class='wiki_link' href='./Glossary.html#bartle-path'>
          the Bartle Path
        </a>
        , a seeker is a type of player who is ignorant of the methods of play,
        and isn't even aware of what those methods are. Typically, such a player
        is either new to the game or hasn't yet learned how to play using a
        specific subset of the
        <a class='wiki_link' href='./Glossary.html#rules'>
          rules
        </a>
        . A seeker displays &quot;unconscious incompetence&quot; as discussed in
        <a class='wiki_link_ext' href='http://www.businessballs.com/consciouscompetencelearningmodel.htm'>
          http://www.businessballs.com/consciouscompetencelearningmodel.htm
        </a>
        .
        `
      },
      {
        id: 'shared-imagined-space', name: 'shared imagined space or SIS',
        description: `
        The imaginary environment collectively built by the players and the
        <a class='wiki_link' href='./Glossary.html#game-master'>
          game master
        </a>
        through usage of
        <a class='wiki_link' href='./Glossary.html#system'>
          System
        </a>
        .
        `
      },
      {
        id: 'simulationism', name: 'Simulationism',
        description: `
        Simulationism is one of the three major modes of play (i.e.
        <a class='wiki_link' href='./Glossary.html#creative-agenda'>
          Creative Agendas
        </a>
        ) recognized in the
        <a class='wiki_link' href='./Glossary.html#big-model'>
          Big Model
        </a>
        . The primary focus of this mode is to achieve immersion within the
        fantasy itself as a priority over other goals, such as interpersonal
        agendas between the players. See
        <a class='wiki_link_ext' href='http://www.indie-rpgs.com/articles/15/'>
          &quot;Simulationism: The Right to Dream&quot;
        </a>
        by Ron Edwards.
        `
      },
      {
        id: 'epic-simulationism', name: 'Simulationism, Epic',
        description: `
        Epic Simulationism is a subset of
        <a class='wiki_link' href='./Glossary.html#simulationism'>
          Simulationism
        </a> where
        <a class='wiki_link' href='./Glossary.html#exploration'>
          exploration
        </a>
        is simply a means to an end, that end being the player's exploration of his or
        her own identity, in the sense of the Hero's Journey.
        `
      },
      {
        id: 'spotlight', name: 'spotlight',
        description: `
        The proverbial spotlight is a reference to the attention given to a
        player by the other players of a tabletop RPG, while that player's
        character is active. This term is virtually never used in reference to
        the game master, because the
        <a class='wiki_link' href='./Glossary.html#game-master'>
          game master
        </a>
        typically doesn't have a PC and therefore is never truly
        &quot;onscreen&quot; (see
        <a class='wiki_link' href='./Glossary.html#screentime'>
          screentime
        </a>
        ).
        `
      },
      {
        id: 'social-contract', name: 'social contract',
        description: `
        <span class='glossary-borrowed'>All interactions and relationships among
        the role-playing group, including emotional connections, logistic
        arrangements, and expectations. All role-playing is a subset of the
        Social Contract.</span>
        `
      },
      {
        id: 'socializer', name: 'socializer',
        description: `
        One of the four player types that results when the implicit/explicit
        axis of Richard Bartle's 3D Player Types model is collapsed. (See the
        <a class='wiki_link_ext' href='http://www.mud.co.uk/richard/VWWPP.pdf'>
          &quot;Virtual Worlds: Why People Play&quot; Introduction
        </a>
        by Richard Bartle.) Socializers are in the Social/Interactive quadrant,
        and therefore feel most rewarded by interacting with other human beings
        on an emotional level, even if engaging in nothing more than simple
        conversation. Compare to achiever, explorer, and killer.
        `
      },
      {
        id: 'stance', name: 'stance',
        description: `
        The positioning of the player's perspective and mode of control,
        relative to that player's character.
        <ul>
          <li>
            Actor:<span class='glossary-borrowed'> The person playing a
            character determines the character's decisions and actions using
            only knowledge and perceptions that the character would have. This
            stance does not necessarily include identifying with the character
            and feeling what he or she &quot;feels,&quot; nor does it require
            in-character dialogue.</span>
          </li>
          <li>
            Author:<span class='glossary-borrowed'> The person playing a
            character determines the character's decisions and actions based on
            the person's priorities, independently of the character's knowledge
            and perceptions. Author Stance may or may not include a retroactive
            &quot;motivation&quot; of the character to perform the actions. When
            it lacks this feature, it is called Pawn Stance.</span>
          </li>
          <li>
            Director:<span class='glossary-borrowed'> The person playing a
            character determines aspects of the environment relative to the
            character in some fashion, entirely separately from the character's
            knowledge or ability to influence events. Therefore the player has
            not only determined the character's actions, but the context,
            timing, and spatial circumstances of those actions, or even
            features of the world separate from the characters. Director Stance
            is often confused with narration of an in-game event, but the two
            concepts are not necessarily related.</span>
          </li>
          <li>
            Pawn:<span class='glossary-borrowed'> A subset of Author Stance
            which lacks the retroactive &quot;motivation&quot; of the character
            to perform the actions. Often but wrongly identified with
            <a class='wiki_link' href='./Glossary.html#gamism'>
              Gamist
            </a>
            play.</span>
          </li>
        </ul>
        `
      },
      {
        id: 'statistic', name: 'statistic',
        description: `
        From
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Statistic_(role-playing_games)'>
          http://en.wikipedia.org/wiki/Statistic_(role-playing_games)
        </a>
        , &quot;A statistic (or stat) in
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Role-playing_game'>
          role-playing games
        </a>
        is a piece of
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Data'>
          data
        </a>
        which represents a particular
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Property_(philosophy)'>
          aspect
        </a>
        of a
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Fictional_character'>
          fictional character
        </a>
        . That piece of data is usually a (
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Units_of_measurement'>
          unitless
        </a>
        )
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Integer'>
          integer
        </a>
        or, in some cases, a
        <a class='wiki_link_ext' href='http://en.wikipedia.org/wiki/Dice_pool'>
          set of dice
        </a>
        .&quot;
        `
      },
      {
        id: 'system', name: 'system',
        description: `
        System consists of the whole collection of
        <a class='wiki_link' href='./Glossary.html#technique'>
          Techniques
        </a> which make up the game for a given instance of roleplaying.
        Effectively &quot;the game&quot;. See also
        <a class='wiki_link' href='./Glossary.html#lumpley-principle'>
          the Lumpley Principle
        </a>
        .
        `
      },
      {
        id: 'technique', name: 'technique',
        description: `
        Techniques are the agreed upon structures through which events forward
        in the game and usually also in the
        <a class='wiki_link' href='./Glossary.html#shared-imagined-space'>
          shared imagined space
        </a>
        . An example of a technique which moves the game forward but which does
        not move events forward in the SIS is the refreshing of a
        &quot;Luck&quot;
        <a class='wiki_link' href='./Glossary.html#statistic'>
          statistic
        </a>
        as a consequence of certain conditions and which has no reality within
        the SIS but may affect it later. Each technique consists of
        <a class='wiki_link' href='./Glossary.html#ephemera'>
          ephemera
        </a>
        .
        `
      },
      {
        id: 'tthm', name: 'table-top hero model',
        description: `
        Also see
        <a class='wiki_link' href='./Glossary.html#epic-simulationism'>
          epic simulationism
        </a>
        , a type of
        <a class='wiki_link' href='./Glossary.html#simulationism'>
          simulationism
        </a>
        where what's most important to simulate is an epic pattern of adventure,
        called the
        <a class='wiki_link' href='./Glossary.html#heros-journey'>
          Hero's Journey
        </a>
        , or Monomyth.
        `
      }
    ]
  }
})


/*
{
  id: '', name: '',
  description: `
  `
},
*/
