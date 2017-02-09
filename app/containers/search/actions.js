import SEARCH from './constants';

export function copy(alt) {
  return {
    type: SEARCH.COPY,
    payload: alt
  };
}

export function copied() {
  return {
    type: SEARCH.COPIED
  };
}

export function notCopied() {
  return {
    type: SEARCH.NOTCOPIED
  };
}

export function next() {
  return {
    type: SEARCH.NEXT
  };
}

