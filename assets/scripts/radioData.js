const radioData = {
    "gta-iii": {
        title: 'Radios de Grand Theft Auto III',
        stations: [
            {
                name: 'Head Radio',
                image: '../assets/images/radios/headradio.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/III/Head+Radio.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: "Stripe Summer", artist: "Dil-Don't" },
                    { time: 147, song: '', artist: '' },
                    { time: 208, song: 'Good Thing', artist: 'Whatever' },
                    { time: 372, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 538, song: '', artist: '' },
                    { time: 570, song: 'Change', artist: 'Conor and Jay' },
                    { time: 735, song: '', artist: '' },
                    { time: 792, song: 'See Through You', artist: 'Frankie Fame' },
                    { time: 960, song: '', artist: '' },
                    { time: 968, song: 'Electronic Go Go', artist: 'Scatwerk' },
                    { time: 1100, song: '', artist: '' },
                    { time: 1174, song: 'Life Is But A Mere Supply', artist: 'Dezma' },
                    { time: 1312, song: '', artist: '' },
                ]
            },
            {
                name: 'Double Clef FM',
                image: '../assets/images/radios/doublecleff.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/III/Double+Clef+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 9, song: 'Non Piu Andrai Farfallone Amoroso', artist: 'Wolfgang Amadeus Mozart' },
                    { time: 220, song: '', artist: '' },
                    { time: 238, song: 'O mio babbino caro', artist: 'Giacomo Puccini' },
                    { time: 364, song: '', artist: '' },
                    { time: 545, song: "Libiamo ne'lieti calici", artist: 'Giuseppe Verdi' },
                    { time: 733, song: "", artist: '' },
                    { time: 749, song: "Chi mi frena in tal momento", artist: 'Gaetano Donizetti' },
                    { time: 961, song: "", artist: '' },
                    { time: 1092, song: "La donna è mobile", artist: 'Giuseppe Verdi' },
                    { time: 1286, song: "", artist: '' },
                    { time: 1300, song: "Finch'han del vino", artist: 'Wolfgang Amadeus Mozart' },
                ]
            },
            {
                name: 'K-JAH Radio',
                image: '../assets/images/radios/k-jah.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/III/K-JAH+Radio.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 5, song: 'Dance of the Vampires', artist: 'Scientist' },
                    { time: 238, song: '', artist: '' },
                    { time: 247, song: 'Your Teeth in My Neck', artist: 'Scientist' },
                    { time: 517, song: '', artist: '' },
                    { time: 521, song: 'The Corpse Rises', artist: 'Scientist' },
                    { time: 710, song: '', artist: '' },
                    { time: 744, song: "The Mummy's Shroud", artist: 'Scientist' },
                    { time: 987, song: '', artist: '' },
                    { time: 994, song: "Plague of Zombies", artist: 'Scientist' },
                ]
            },
            {
                name: 'Lips 106',
                image: '../assets/images/radios/lips.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/III/Lips+106.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 74, song: 'Bump To The Music', artist: 'Fatamarse'},
                    { time: 205, song: '', artist: ''},
                    { time: 333, song: "Feels Like I Just Can't Take No More", artist: "April's In Paris"},
                    { time: 527, song: "", artist: ""},
                    { time: 531, song: "Forever", artist: "Lucy"},
                    { time: 690, song: "", artist: ""},
                    { time: 708, song: "Pray Ir Goes Ok?", artist: "Boyz 2 Girlz"},
                    { time: 920, song: "", artist: ""},
                    { time: 938, song: "Grand Theft Auto (Joyride)", artist: "Da Shootaz"},
                    { time: 1057, song: "", artist: ""},
                    { time: 1060, song: "Rubber Tip", artist: "Funky Bjs"},
                    { time: 1200, song: "", artist: ""},
                ]
            },
            {
                name: 'Game Radio FM',
                image: '../assets/images/radios/game_fm.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/III/Game+Radio+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 5, song: 'Scary Movies Instrumental', artist: 'Reef' },
                    { time: 32, song: "We're Live Danger", artist: "Royce Da 5'9\"" },
                    { time: 162, song: "Nature Freestyle", artist: "Nature" },
                    { time: 228, song: "JoJo Pellegrino Freestyle", artist: "JoJo Pellegrino" },
                    { time: 299, song: "", artist: "" },
                    { time: 325, song: "Spit Game", artist: "Royce Da 5'9\" + Pretty Ugly" },
                    { time: 435, song: "I'm the King", artist: "Royce Da 5'9\"" },
                    { time: 615, song: "", artist: "" },
                    { time: 697, song: "By a Stranger", artist: "Black Rob" },
                    { time: 771, song: "Rising to the Top", artist: "Agallah + Sean Price" },
                    { time: 916, song: '', artist: ''},
                ]
            },
            {
                name: 'MSX FM',
                image: '../assets/images/radios/msx.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/III/MSX+FM.mp3',
                tracks: [
                    { time: 0, song: 'Quagmire', artist: 'Calyx + Timecode'},
                    { time: 171, song: 'Get Wild', artist: 'Rascal & Klone + Timecode' },
                    { time: 355, song: 'Judgement Day', artist: 'Ryme Tyme + Timecode' },
                    { time: 481, song: 'Force', artist: 'Hex + Timecode' },
                    { time: 568, song: 'First Contact', artist: 'Omni Trio + Timecode' },
                    { time: 650, song: 'Spectre', artist: 'Aquasky' },
                    { time: 760, song: 'Winner Takes All', artist: 'Rascal & Klone' },
                    { time: 1050, song: 'T Minus', artist: 'Ryme Tyme + Timecode' },
                    { time: 1093, song: 'Spasm', artist: 'nCode + Timecode' },
                    { time: 1274, song: 'Monolith', artist: 'D. Kay + Timecode' },
                    { time: 1393, song: 'Iceberg', artist: 'Dom + Ryme Tyme + Timecode' },
                ]
            },
            {
                name: 'Flashback FM',
                image: '../assets/images/radios/flashback.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/III/Flashback+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 4, song: 'Rush Rush', artist: 'Debbie Harry' },
                    { time: 194, song: '', artist: '' },
                    { time: 244, song: 'Shake It Up', artist: 'Elizabeth Daily' },
                    { time: 444, song: '', artist: '' },
                    { time: 527, song: 'Scarface (Push It to the Limit)', artist: 'Paul Engemann' },
                    { time: 671, song: '', artist: '' },
                    { time: 679, song: "She's On Fire", artist: 'Amy Holland' },{ time: 885, song: "", artist: '' },
                    { time: 939, song: "I'm Hot Tonight", artist: 'Elizabeth Daily' },
                    { time: 1100, song: "", artist: '' },
                ]
            },
        ]
    },
    "gta-vc": {
        title: 'Radios de Grand Theft Auto: Vice City',
        stations: [
            {
                name: 'Wildstyle Pirate Radio',
                image: '../assets/images/radios/wildstyle.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VC/Wildstyle+Pirate+Radio.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'Flash FM',
                image: '../assets/images/radios/flash.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VC/Flash+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'Fever 105',
                image: '../assets/images/radios/fever.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VC/Fever+105.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'V-Rock',
                image: '../assets/images/radios/v-rock.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VC/V-Rock.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'Radio Espantoso',
                image: '../assets/images/radios/espantoso.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VC/Radio+Espantoso.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'Emotion 98.3',
                image: '../assets/images/radios/emotion.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VC/Emotion+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'Wave 103',
                image: '../assets/images/radios/wave.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VC/Wave+103.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
        ]
    },
    "gta-sa": {
        title: 'Radios de Grand Theft Auto: San Andreas',
        stations: [
            {
                name: 'Playback FM',
                image: '../assets/images/radios/playback.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Playback+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'K-Rose',
                image: '../assets/images/radios/k-rose.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-Rose.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'K-DST',
                image: '../assets/images/radios/k-dst.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-DST.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Bounce FM',
                image: '../assets/images/radios/bounce.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Bounce+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'SF-UR',
                image: '../assets/images/radios/sfur.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/SF-UR.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Radio Los Santos',
                image: '../assets/images/radios/rls.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Radio+Los+Santos.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Radio X',
                image: '../assets/images/radios/radio_x.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Radio+X.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'CSR 103.9',
                image: '../assets/images/radios/csr.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/CSR+103.9.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'K-JAH West',
                image: '../assets/images/radios/k-jah_w.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-JAH+West.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Master Sounds 98.3',
                image: '../assets/images/radios/master.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
        ]
    },
    "gta-lcs": {
        title: 'Radios de Grand Theft Auto: Liberty City Stories',
        stations: [
            {
                name: 'Head Radio',
                image: '../assets/images/radios/head_lcs.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Head+Radio.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'Double Clef FM',
                image: '../assets/images/radios/clef_lcs.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Double+Clef+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'K-JAH Radio',
                image: '../assets/images/radios/k-jah_lcs.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/K-JAH+Radio.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Rise FM',
                image: '../assets/images/radios/rise.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Rise+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Lips 106',
                image: '../assets/images/radios/lips.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Lips+106.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Radio Del Mundo',
                image: '../assets/images/radios/rdm.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Radio+Del+Mundo.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'MSX 98',
                image: '../assets/images/radios/msx98.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/MSX+98.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Flashback FM',
                image: '../assets/images/radios/flashback_lcs.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Flashback+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'The Liberty Jam',
                image: '../assets/images/radios/tlj.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/The+Liberty+Jam.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
        ]
    },
    "gta-vcs": {
        title: 'Radios de Grand Theft Auto: Vice City Stories',
        stations: [
            {
                name: 'Flash FM',
                image: '../assets/images/radios/flash.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VCS/Flash+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'V-Rock',
                image: '../assets/images/radios/v-rock.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/VCS/V-Rock.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Paradise FM',
                image: '../assets/images/radios/paradise.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/K-JAH+Radio.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'VCFL',
                image: '../assets/images/radios/vcfl.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Rise+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Wave 103',
                image: '../assets/images/radios/wave.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Lips+106.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Fresh 105 FM',
                image: '../assets/images/radios/fresh.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Radio+Del+Mundo.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Radio Espantoso',
                image: '../assets/images/radios/espantoso_vcs.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/MSX+98.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Emotion 98.3',
                image: '../assets/images/radios/emotion.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/LCS/Flashback+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
        ]
    },
    "gta-iv": {
        title: 'Radios de Grand Theft Auto IV',
        stations: [
            {
                name: 'The Beat 102.7',
                image: '../assets/images/radios/beat.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Playback+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'The Classics 104.1',
                image: '../assets/images/radios/classics.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-Rose.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Electro-Choc',
                image: '../assets/images/radios/echoc.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-DST.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Fusion FM',
                image: '../assets/images/radios/fusion.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Bounce+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'IF99',
                image: '../assets/images/radios/if99.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/SF-UR.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Jazz Nation Radio 108.5',
                image: '../assets/images/radios/jnr.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Radio+Los+Santos.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'The Journey',
                image: '../assets/images/radios/journey.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Radio+X.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'K109 The Studio',
                image: '../assets/images/radios/k109.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/CSR+103.9.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Liberty City Hardcore',
                image: '../assets/images/radios/lchc.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-JAH+West.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Liberty Rock Radio',
                image: '../assets/images/radios/lrr.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Massive B Soundsystem 96.9',
                image: '../assets/images/radios/massive.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Radio Broker',
                image: '../assets/images/radios/broker.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'RamJam FM',
                image: '../assets/images/radios/ram.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'San Juan Sounds',
                image: '../assets/images/radios/sanjuan.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Self-Actualization FM',
                image: '../assets/images/radios/self.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Tuff Gong Radio',
                image: '../assets/images/radios/tuff.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'The Vibe 98.8',
                image: '../assets/images/radios/vibe.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Vice City FM',
                image: '../assets/images/radios/vice.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Vladivostok FM',
                image: '../assets/images/radios/vlad.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
        ]
    },
    "gta-v": {
        title: 'Radios de Grand Theft Auto V',
        stations: [
            {
                name: 'West Coast Classics',
                image: '../assets/images/radios/wcc.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Playback+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 13, song: 'Fade Away', artist: 'Craig Gray' },
                    { time: 180, song: 'Change', artist: 'Conor & Jay' }
                ]
            },
            {
                name: 'East Los FM',
                image: '../assets/images/radios/east.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-Rose.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Soulwax FM',
                image: '../assets/images/radios/soulwax.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-DST.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Rebel Radio',
                image: '../assets/images/radios/rebel.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Bounce+FM.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Channel X',
                image: '../assets/images/radios/channel.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/SF-UR.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Radio Los Santos',
                image: '../assets/images/radios/rls_v.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Radio+Los+Santos.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Non-Stop-Pop FM',
                image: '../assets/images/radios/nsp.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Radio+X.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Los Santos Rock Radio',
                image: '../assets/images/radios/lsrr.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/CSR+103.9.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Still Slipping Los Santos',
                image: '../assets/images/radios/ssls.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/K-JAH+West.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'iFruit Radio',
                image: '../assets/images/radios/ifruit.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Los Santos Underground Radio',
                image: '../assets/images/radios/lsur.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'blonded Los Santos 97.8 FM',
                image: '../assets/images/radios/blonded.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Vinewood Boulevard Radio',
                image: '../assets/images/radios/vbr.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Space 103.2',
                image: '../assets/images/radios/space.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Kult FM',
                image: '../assets/images/radios/kult.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Radio Mirror Park',
                image: '../assets/images/radios/mirror.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'The Lab',
                image: '../assets/images/radios/lab.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'The Lowdown 91.1',
                image: '../assets/images/radios/lowdown.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'FlyLo FM',
                image: '../assets/images/radios/flylo.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'WorldWide FM',
                image: '../assets/images/radios/ww_fm.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'The Blue Ark',
                image: '../assets/images/radios/tba.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Music Locker Radio',
                image: '../assets/images/radios/mlr.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'MOTOMAMI Los Santos',
                image: '../assets/images/radios/motomami.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
            {
                name: 'Reproductor',
                image: '../assets/images/radios/reproductor.webp',
                audio: 'https://viceclub.s3.us-east-1.amazonaws.com/SA/Master+Sounds+98.3.mp3',
                tracks: [
                    { time: 0, song: '', artist: ''},
                    { time: 150, song: 'La Donna è Mobile', artist: 'Giuseppe Verdi' }
                ]
            },
        ]
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = radioData;
} else {
    window.radioData = radioData;
}