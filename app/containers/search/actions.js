import SEARCH from './constants';

export function copy() {
  return {
    type: SEARCH.COPY
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

