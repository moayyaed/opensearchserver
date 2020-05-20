/*
 * Copyright 2017-2020 Emmanuel Keller / Jaeksoft
 *  <p>
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  <p>
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  <p>
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

'use strict';

function newStatus() {
  return {spinning: false, task: null, error: null}
}

function Spinning(props) {

  if (props.status && props.status.spinning) {
    return (
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    return '';
  }
}

function Status(props) {

  if (props.status.error && props.status.task) {
    return (
      <React.Fragment>
        <Spinning spinning={props.status.spinning}/>
        <div className="text-danger float-right">
          <small>{props.status.task}: {props.status.error}</small>
        </div>
      </React.Fragment>
    );
  } else if (props.status.error) {
    return (
      <React.Fragment>
        <Spinning spinning={props.status.spinning}/>
        <div className="text-danger float-right">
          <small>{props.status.error}</small>
        </div>
      </React.Fragment>
    );
  } else if (props.status.task) {
    return (
      <React.Fragment>
        <Spinning spinning={props.status.spinning}/>
        <div className="text-success float-right">
          <small>{props.status.task}</small>
        </div>
      </React.Fragment>
    );
  } else return (
    <React.Fragment>
      <Spinning spinning={props.status.spinning}/>
      &nbsp;
    </React.Fragment>
  );
}

function endTask(status, newTask, newError) {
  status.spinning = false;
  if (newTask)
    status.task = newTask;
  if (newError)
    status.error = newError;
  else if (newTask)
    status.error = null;
  return status;
}

function startTask(status, newTask) {
  status.spinning = true;
  if (newTask)
    status.task = newTask;
  return status;
}
