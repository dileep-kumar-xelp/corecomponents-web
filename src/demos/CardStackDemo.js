import React from "react";
import CardStack from "../components/layouters/CardStack";
export default class CardStackDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null
        };
    }
    componentDidMount() {
        fetch(
            "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd4decdff1554e89bc5ab90e8afa322f"
        )
            .then(result => {
                const resultJson = result.json();
                return resultJson;
            })
            .then(data => {
                this.setState({ articles: data.articles });
            });
    }
    render() {
        return (
            <div style={{ width: "100%", height: "80vh", overflow: "hidden" }}>
                {!this.state.articles && (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "red",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 20
                        }}
                    >
                        LOADING
                    </div>
                )}
                {this.state.articles && (
                    <CardStack onChange={val => console.log(val)}>
                        {this.state.articles.map(article => (
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    background: "white",
                                    padding: "20px",
                                    borderRadius: "2px",
                                    overflow: "hidden"
                                }}
                            >
                                <img
                                    style={{ width: "100%", height: "auto" }}
                                    src={article.urlToImage}
                                    alt="No img"
                                />
                                <div
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        marginTop: 10,
                                        fontSize: 16,
                                        lineHeight: "24px"
                                    }}
                                >
                                    {article.title}
                                </div>
                                {article.author && (
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            marginTop: 5,
                                            fontSize: 12,
                                            color: "#ccc"
                                        }}
                                    >
                                        By {article.author}
                                    </div>
                                )}
                                <div
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        marginTop: 10,
                                        fontSize: 14,
                                        lineHeight: "21px",
                                        fontWeight: 250
                                    }}
                                >
                                    {article.description}
                                </div>
                            </div>
                        ))}
                    </CardStack>
                )}
            </div>
        );
    }
}
