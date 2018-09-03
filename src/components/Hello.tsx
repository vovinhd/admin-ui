import * as React from "react";
import ApolloClient from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloProvider} from "react-apollo";

const link = new HttpLink({
    uri: 'https://graphql-pokemon.now.sh',
})

const cache = new InMemoryCache()

const client = new ApolloClient({
    cache,
    link,
})


export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <ApolloProvider client={client}>
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>

            </div>
            </ApolloProvider>
        );
    }
}