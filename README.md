# this kinda works

*****SETUP******
1) in server/models/whosGoingModel, you can replace the const PG_URI with the link to your database.
2) Feel free to use the mock data in the *DATA BASE SETUP* to start your server.  Just past it into your query field.

******DATA BASE SETUP ******
CREATE TABLE public.users (
    _id SERIAL,
    username VARCHAR(100) NOT NULL UNIQUE,
    firstName VARCHAR,
    lastName VARCHAR,
    password VARCHAR
);

CREATE TABLE public.eventinfo(
    _id SERIAL,
    eventTitle VARCHAR NOT NULL UNIQUE,
    eventDate DATE NOT NULL,
    eventTime TIME NOT NULL,
    imageLink VARCHAR NOT NULL,
    eventAddress VARCHAR NOT NULL,
    eventDescription VARCHAR,
    theUser VARCHAR REFERENCES users(userName),
    participants INT NOT NULL
);

CREATE TABLE public.allEvents(
    _id SERIAL,
    theEvent VARCHAR REFERENCES eventinfo(eventTitle),
    theUser VARCHAR REFERENCES users(userName)
);

CREATE Table public.friends (
    _id SERIAL UNIQUE,
    theUser VARCHAR REFERENCES users(userName),
    theFriend VARCHAR REFERENCES users(userName)
);





INSERT INTO public."users" (username, password, firstName, lastName) VALUES
  ('miketyson', 'boxer', 'Mike', 'Tyson'),
  ('emmanuelMacron', 'crepes', 'Emmanuel', 'Macron'),
  ('kevinbacon', 'movies', 'Kevin', 'Bacon'),
  ('hamburglar', 'yummy', 'Ronald', 'McDonalds'),
  ('barbarawalters', 'news', 'Barbara', 'Walters' ),
  ('theloner', 'awesome', 'James', 'Bond');
  

INSERT INTO eventinfo (eventTitle, eventDate, eventTime, imageLink, eventAddress, eventDescription, theUser, participants) VALUES
  ('Haul & Oats Concert', '19 Nov 2022', 'T20:00:00', 'https://www.concertarchives.org/image_uploads/photo/image/47469/large_splash.jpg', '3900 w. manchester blvd. inglewood ca 90305', 'A wonderful evening listing to one of the greatest duo singers of all times' ,'miketyson', 3),

  ('Lakers vs Clippers', '22 Oct 2022', 'T15:30:00', 'https://www.cryptoarena.com/assets/img/1130x665_Lakers-0203833209.jpg', '1111 S Figueroa St, Los Angeles, CA 90015', 'Be there for the night where the cross town rivals battle for the first time this season!  Who will claim the throne of LA?', 'kevinbacon', 3),

  ('mini-golf Tournament', '02 Nov 2022', 'T13:00:00', 'https://p300-americantownscom.netdna-ssl.com/img/article/ca-mini-golf-1.jpg', '4989 Sepulveda Blvd, Sherman Oaks, CA 91403', 'The USNMGA (US National Mini-Golf Association) has sponsered this tourny and opened the event for anyone who wants to attend.', 'hamburglar', 5),

  ('Pie Festival', '24 Oct 2022', 'T11:00:00', 'https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2020/03/54799012_1025085660995023_8280480514696019968_n-700x467.jpg', '1869 N Vermont Ave, Los Angeles, CA 90027', 'Calling all pie lovers and bakers!!! Come to the event of the year!', 'hamburglar', 2),

  ('Holloween Party', '29 Oct 2022', 'T19:00:00', 'https://www.brisbanekids.com.au/wp-content/uploads/2014/10/Depositphotos_82209490_S.jpg', '633 W 5th St 59th Floor, Los Angeles, CA', 'Holloween Pary is going to be lit!!!', 'kevinbacon', 1),

  ('Thanksgiving Dinner', '24 Nov 2022', 'T16:00:00', 'https://www.thespruceeats.com/thmb/7MZsLHfU1MI1hFY4qCY4F3PlZrY=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thanksgiving-dinner-dishes-836012728-5bdda2e6c9e77c00262539e0.jpg', '1250 E Harvard Rd, Burbank, CA 91501', 'Come join us in serving Thanksgiving dinner to those who can nott afford it.', 'barbarawalters', 3),

  ('Watergun Fight', '27 Aug 2022', 'T16:00:00', 'https://images.dailyhive.com/20160810195402/watergun.jpg', '4730 Crystal Springs Dr, Los Angeles, CA 90027', 'This is going to be the biggest watergun fight ever assembled.  Sponsered by guinness book of world records.', 'emmanuelMacron', 3);

  ('Madeon Dj Set', '27 Aug 2022', 'T22:00:00', 'https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2022/08/09233143/SnPk2BfCuPaJNRFFDLYcZEtKBs0vFYqsr1PWB5pV-972x597.jpeg', '6021 Hollywood Blvd.
Los Angeles, CA 90028', 'Straight from his emotionally charged set at HARD Events Summer, Madeon makes his Academy LA debut with a special DJ Set Saturday, 8/27' ,'theloner', 1);


INSERT INTO allEvents (theEvent, theUser) VALUES
    ('Haul & Oats Concert', 'miketyson' ),
    ('Haul & Oats Concert', 'emmanuelMacron' ),
    ('Haul & Oats Concert', 'hamburglar' ),

    ('Lakers vs Clippers', 'barbarawalters'),
    ('Lakers vs Clippers', 'emmanuelMacron' ),
    ('Lakers vs Clippers', 'hamburglar' ),

    ('mini-golf Tournament', 'miketyson'),
    ('mini-golf Tournament', 'barbarawalters'),
    ('mini-golf Tournament', 'emmanuelMacron' ),
    ('mini-golf Tournament', 'hamburglar' ),
    ('mini-golf Tournament', 'kevinbacon' ),

    ('Pie Festival', 'barbarawalters'),
    ('Pie Festival', 'emmanuelMacron' ),
    
    ('Holloween Party', 'kevinbacon' ),

    ('Thanksgiving Dinner', 'barbarawalters'),
    ('Thanksgiving Dinner', 'emmanuelMacron' ),
    ('Thanksgiving Dinner', 'kevinbacon' ),

    ('Watergun Fight', 'emmanuelMacron' ),
    ('Watergun Fight', 'hamburglar' ),
    ('Watergun Fight', 'kevinbacon' );

    



INSERT INTO friends(theUser, theFriend) VALUES
    ('miketyson', 'emmanuelMacron'),
    ('miketyson', 'kevinbacon'),
    ('miketyson', 'hamburglar'),
    ('miketyson', 'barbarawalters'),

    ('emmanuelMacron', 'kevinbacon'),
    ('emmanuelMacron', 'hamburglar'),
    ('emmanuelMacron', 'barbarawalters'),
    ('emmanuelMacron', 'miketyson'),

    ('kevinbacon', 'emmanuelMacron'),
    ('kevinbacon', 'hamburglar'),
    ('kevinbacon', 'barbarawalters'),
    ('kevinbacon', 'miketyson'),

    ('hamburglar', 'emmanuelMacron'),
    ('hamburglar', 'kevinbacon'),
    ('hamburglar', 'barbarawalters'),
    ('hamburglar', 'miketyson'),

    ('barbarawalters', 'emmanuelMacron'),
    ('barbarawalters', 'kevinbacon'),
    ('barbarawalters', 'hamburglar'),
    ('barbarawalters', 'miketyson');



-- THESE COMMANDS WILL REMOVE THE MOCK DATATABLES FROM YOUR DATABASE
-- drop table "allevents";
-- drop table "friends";
-- drop table "eventinfo";
-- drop table "users";










INSERT INTO allEvents (theEvent, theUser) VALUES ('Holloween Party', 'kevinbacon' );
DELETE FROM allEvents WHERE theUser = 'kevinbacon';

select * FROM allEvents where theevent = 'Lakers vs Clippers';

UPDATE allEvents SET participants = (SELECT participants FROM eventinfo WHERE eventTitle = Holloween Party  ) + 1 WHERE eventtitle = $1 ;

SELECT _id FROM users WHERE name = $1

select * FROM allEvents where theevent = 'Lakers vs Clippers';

UPDATE eventinfo SET participants = (SELECT participants FROM eventinfo WHERE eventTitle = 'Holloween Party'  ) + 1 WHERE eventTitle = 'Holloween Party' ;



INSERT INTO eventinfo (eventTitle, eventDate, eventTime, imageLink, eventAddress, eventDescription, theUser, participants) VALUES
  ('Madeon Dj Set', '27 Aug 2022, 'T22:00:00', 'https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2022/08/09233143/SnPk2BfCuPaJNRFFDLYcZEtKBs0vFYqsr1PWB5pV-972x597.jpeg', '6021 Hollywood Blvd.
Los Angeles, CA 90028', 'Straight from his emotionally charged set at HARD Events Summer, Madeon makes his Academy LA debut with a special DJ Set Saturday, 8/27' ,'theloner', 1),