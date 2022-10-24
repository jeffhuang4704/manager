// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { ApplicationList, isApplicationList } from './ApplicationList';

export interface ApplicationListWrap {
  list: ApplicationList;
}

export function isApplicationListWrap(v: any): v is ApplicationListWrap {
  return (
    (v['list'] && isApplicationList(v['list']))
  );
}