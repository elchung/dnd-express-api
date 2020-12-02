CREATE TABLE characterAbilityScores (
	id SERIAL primary key,
	strength 	 INT,
	dexterity    INT,
	constitution INT,
	intelligence INT,
	wisdom		 INT,
	charisma     INT
);

CREATE TABLE characterDeathSaves (
	id SERIAL primary key,
	successes INT not null default 0,
	failures  INT not null default 0
);

CREATE TABLE characterKnownSpells (
    id SERIAL primary key,
    zero  TEXT[],
    one   TEXT[],
    two   TEXT[],
    three TEXT[],
    four  TEXT[],
    five  TEXT[],
    six   TEXT[],
    seven TEXT[],
    eight TEXT[],
    nine  TEXT[]
);

CREATE TABLE characterSpellSlots (
    id serial primary key,
    oneMax INT,
    oneUsed INT,
    twoMax INT,
    twoUsed INT,
    threeMax INT,
    threeUsed INT,
    fourMax INT,
    fourUsed INT,
    fiveMax INT,
    fiveUsed INT,
    sixMax INT,
    sixUsed INT,
    sevenMax INT,
    sevenIsed INT,
    eightMax INT,
    eightUsed INT,
    nineMax INT,
    nineUsed INT
);

CREATE TABLE characterTreasureMoney (
	id       serial primary key,
	gold     INT not null default 0,
	silver   INT not null default 0,
	electrum INT not null default 0,
	copper   INT not null default 0
);

CREATE TABLE characterTreasure (
    id serial primary key,
    moneyId INT not null references characterTreasureMoney(id) on delete cascade
    --treasure items points to this
);

CREATE TABLE characterTreasureItems (
	id serial primary key,
	name TEXT not null,
	quantity INT,
	weightInLbs INT,
	bookmarked BOOL not null default false,
	magical BOOL not null default false,
	descriptionText TEXT,
    treasureId INT references characterTreasure(id)
);


CREATE TABLE characterSheetSettings (
	id serial primary key,
	abilityScoreOnTop BOOL not null default true
);

CREATE TABLE characterData (
	characterId serial primary key,
	username TEXT not null unique,
	characterName TEXT,
	level TEXT,
	class TEXT,
	background TEXT,
	race TEXT,
	spellcastingAbility TEXT,
	experience INT,
	proficiencyBonus INT,
	inspiration INT,
	armorClass INT,
	initiative INT,
	speed INT,
	maxHp INT,
	tempHp INT,
	currentHp INT,
	hpHistory INT[],
	skillProficiencies TEXT[],
	savingThrowProficiencies TEXT[],
	skillExpertise TEXT[],
	generalProficiencies TEXT[],
	knownLanguages TEXT[],
	toolAndOtherProficiencies TEXT[],
	preparedSpells TEXT[],
	characterAbilityScoresId INT references characterAbilityScores(id) on delete cascade,
	characterDeathSaveId INT not null not null references characterDeathSaves(id) on delete cascade,
	characterKnownSpellsId INT not null references characterKnownSpells(id) on delete cascade,
	characterSpellSlotsId INT not null references characterSpellSlots(id) on delete cascade,
	characterTreasureId INT not null references characterTreasure(id) on delete cascade,
	characterSheetSettingsId INT not null references characterSheetSettings(id) on delete cascade
);

CREATE TABLE characterHitDice (
	id SERIAL primary key,
	numDice  INT,
	diceType INT,
	numUsed  INT,
	characterId INT not null references characterData(characterId) on delete cascade
);

CREATE TABLE characterFeaturesAndTraits (
	id serial primary key,
	characterId INT not null references characterData(characterId),
    index INT not null,
	title TEXT,
	body  TEXT
);
