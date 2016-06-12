import { TraverserBuilder } from './traversal/traverser-builder';

treeSearchFactory.$inject = ['ui.tree-search.matcherFactory'];
export function treeSearchFactory (matcherFactory) {

  let builder = new TraverserBuilder();

  return function treeSearch(nodes, query) {

    let matcher = matcherFactory(query);

    let traverser = builder
      .setMatcher(matcher)
      .get();

    return (nodes || []).filter(node => traverser.traverse(node));
  }
}

