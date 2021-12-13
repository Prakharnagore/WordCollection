import React from "react";
import "./Definition.css";

const Definition = ({ word, category, meanings }) => {
  if (word === "") {
    return (
      <div className="meanings">
        <span className="subTitle">
          Start by typing Word in Search Box . . . . .
        </span>
      </div>
    );
  }

  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0].audio || ""}
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            width: "100%",
            height: "40px",
          }}
          controls
        ></audio>
      )}
      {meanings.map((mean) => {
        return mean.meanings.map((item) => {
          const { definitions } = item;
          return definitions.map((def) => {
            const { definition, example, synonyms } = def;
            return (
              <div
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <b>{definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {example && (
                  <span>
                    <b>Example : </b> {example}
                  </span>
                )}
                {synonyms && (
                  <span>
                    <b>Synonyms : </b> {synonyms.map((s) => `${s} ,`)}
                  </span>
                )}
              </div>
            );
          });
        });
      })}
    </div>
  );
};

export default Definition;
