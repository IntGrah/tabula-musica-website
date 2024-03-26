DROP DATABASE tm;
CREATE DATABASE tm;
USE tm;
-- role
-- anonymous (unused)
-- unverified (customise profile)
-- verified (commenting)
-- subscriber (all articles)
-- editor (write articles)
-- administrator (manage users)
CREATE TABLE User (
    id CHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    email VARCHAR(191) UNIQUE NOT NULL,
    role ENUM('unverified', 'verified', 'subscriber', 'editor', 'admin') NOT NULL,
    name VARCHAR(191) NOT NULL,
    image TEXT DEFAULT NULL,
    bio TEXT DEFAULT NULL,
    mailingList BOOLEAN NOT NULL DEFAULT FALSE,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    accessedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Account (
    id CHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    provider ENUM('credentials', 'google') NOT NULL,
    userId VARCHAR(191) UNIQUE NOT NULL,
    passwordHash CHAR(60), -- NULL for OAuth
    isPrimary BOOLEAN NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE ResetToken (
    userId CHAR(36) UNIQUE NOT NULL,
    token CHAR(60) NOT NULL, -- reset password
    expiresAt DATETIME(3) NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE VerificationCode (
    userId CHAR(36) UNIQUE NOT NULL,
    code INT NOT NULL, -- 6-digit token verify ownership of email
    expiresAt DATETIME(3) NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE Session (
    id CHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    userId CHAR(36) NOT NULL,
    expiresAt DATETIME(3) NOT NULL,
    recovery BOOLEAN NOT NULL DEFAULT FALSE, -- user is forced to reset password
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE Article (
    id CHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    userId CHAR(36) NOT NULL,
    title VARCHAR(191) NOT NULL,
    body TEXT NOT NULL,
    time DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id)
);
CREATE TABLE Comment (
    id CHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    articleId CHAR(36) NOT NULL,
    userId CHAR(36) NOT NULL,
    -- NULL for top-level comments
    replyId CHAR(36),
    body TEXT NOT NULL,
    time DATETIME(3) NOT NULL,
    -- When article is deleted, comments are deleted
    FOREIGN KEY (articleId) REFERENCES Article (id) ON DELETE CASCADE,
    -- When user is deleted, comments are deleted
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE,
    -- When comment is deleted, replies are preserved and 'Deleted User' is set as author
    FOREIGN KEY (replyId) REFERENCES Comment (id)
);
