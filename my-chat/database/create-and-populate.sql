CREATE TABLE comments (
    commentID INTEGER GENERATED ALWAYS AS IDENTITY,
    comment VARCHAR(100) NOT NULL,
    PRIMARY KEY (commentID)
);

INSERT INTO comments (comment)
    VALUES
        ('Hey how are you') RETURNING commentID,
        ('Im good thanks') RETURNING commentID;

SELECT * FROM comments;
